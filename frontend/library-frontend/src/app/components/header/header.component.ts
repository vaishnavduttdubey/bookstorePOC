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

  //  Cart
  cartCount: number = 0;

  //  Search
  searchText: string = '';
  suggestions: any[] = [];
  showSuggestions: boolean = false;

  private searchSubject = new Subject<string>();
  private searchSub!: Subscription;

  ngOnInit(): void {
    //  Cart live updates
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    //  Debounced search (3 sec)
    this.searchSub = this.searchSubject
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe(value => {
        this.updateSuggestions(value);
      });
  }

  // When typing in input
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim();
    this.searchText = value;
    this.searchSubject.next(value);
  }

  // Show top 5 book suggestions
  updateSuggestions(value: string): void {
    if (!value) {
      this.suggestions = [];
      this.showSuggestions = false;
      return;
    }

    const regex = new RegExp(value, 'i');
    const matchedBooks = this.bookService.books.filter(
      (book: any) => regex.test(book.title) || regex.test(book.author)
    );

    this.suggestions = matchedBooks.slice(0, 5);
    this.showSuggestions = this.suggestions.length > 0;
  }

  // Select suggestion by click
  selectSuggestion(book: any): void {
    this.searchText = '';
    this.suggestions = [];
    this.showSuggestions = false;
    this.router.navigate(['/book', book.id]);
  }

  // Optional: pressing 1–5 keys to open suggestion
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
