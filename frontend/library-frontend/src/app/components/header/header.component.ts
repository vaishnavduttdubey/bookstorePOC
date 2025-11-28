import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CartService } from '../../pages/cart.service';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  router = inject(Router);
  cartService = inject(CartService);
  bookService = inject(BooklistService);

  cartCount: number = 0;
  searchText: string = '';
  suggestions: any[] = [];
  showSuggestions: boolean = false;

  private searchSubject = new Subject<string>();
  private searchSub!: Subscription;

  ngOnInit(): void {
    this.bookService.loadBooks();   // 🔥 IMPORTANT

    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    this.searchSub = this.searchSubject
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(value => this.updateSuggestions(value));
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();
    this.searchSubject.next(value);
  }

  updateSuggestions(value: string): void {
    this.bookService.searchBooks(value);
    this.bookService.filteredBooks$.subscribe(result => {
      this.suggestions = result.slice(0, 5);
      this.showSuggestions = this.suggestions.length > 0;
    });
  }

  selectSuggestion(book: any): void {
    this.searchText = '';
    this.suggestions = [];
    this.router.navigate(['/book', book.id]);
  }

  onKeydownInInput(event: KeyboardEvent): void {
    const num = Number(event.key);
    if (num >= 1 && num <= this.suggestions.length) {
      this.selectSuggestion(this.suggestions[num - 1]);
    }
  }

  ngOnDestroy(): void {
    this.searchSub?.unsubscribe();
  }
}
