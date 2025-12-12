import { Component, inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
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

  // Inject Services
  router = inject(Router);
  cartService = inject(CartService);
  bookService = inject(BooklistService);

  // Header Values
  cartCount: number = 0;
  searchText: string = '';
  suggestions: any[] = [];
  showSuggestions: boolean = false;
  selectedIndex: number = -1;

  // RxJS Subject for debounce
  private searchSubject = new Subject<string>();

  // Subscriptions list
  private subs: Subscription[] = [];

  ngOnInit(): void {

    // Load all books initially
    this.bookService.loadBooks();

    // Update cart count
    this.subs.push(
      this.cartService.cartCount$.subscribe(count => (this.cartCount = count))
    );

    // Debounce user typing in search bar
    this.subs.push(
      this.searchSubject
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe(query => {

          if (!query.trim()) {
            this.clearSuggestions();
            return;
          }

          // Filter book suggestions
          this.bookService.searchBooks(query.trim());
        })
    );

    // Listen to results coming from service
    this.subs.push(
      this.bookService.filteredBooks$.subscribe((result: any[]) => {

        if (!this.searchText.trim()) {
          this.clearSuggestions();
          return;
        }

        this.suggestions = (result || []).slice(0, 8);
        this.showSuggestions = this.suggestions.length > 0;
        this.selectedIndex = -1;
      })
    );

    // When route changes → reset search
    this.subs.push(
      this.router.events
        .pipe(filter(evt => evt instanceof NavigationEnd))
        .subscribe(() => this.resetAll())
    );
  }

  // User types → call debounce subject
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
    this.searchSubject.next(this.searchText);
  }

  // Clicking on suggestion → open details page
  selectSuggestion(book: any): void {
    if (!book) return;

    this.resetAll();
    this.router.navigate(['/book', book.id]);
  }

  //  ENTER press OR search icon click → open search result page
  onEnter() {
    if (!this.searchText.trim()) return;

    this.router.navigate(['/search'], {
      queryParams: { q: this.searchText }
    });

    this.resetAll();
  }

  hideSuggestions() {
    setTimeout(() => this.clearSuggestions(), 150);
  }

  // Clear dropdown
  clearSuggestions() {
    this.showSuggestions = false;
    this.suggestions = [];
    this.selectedIndex = -1;
  }

  // Reset everything
  resetAll() {
    this.clearSuggestions();
    this.searchText = '';
  }

  // ARROW KEYS + ESCAPE + ENTER BEHAVIOR
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {

    if (!this.showSuggestions || !this.suggestions.length) return;

    if (event.key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.suggestions.length;
      event.preventDefault();
    }
    else if (event.key === 'ArrowUp') {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.suggestions.length) % this.suggestions.length;
      event.preventDefault();
    }
    else if (event.key === 'Enter') {
      if (this.selectedIndex >= 0) {
        this.selectSuggestion(this.suggestions[this.selectedIndex]);
      } else {
        this.onEnter();
      }
      event.preventDefault();
    }
    else if (event.key === 'Escape') {
      this.clearSuggestions();
    }
  }

  // Highlight matched text
  highlight(text: string): string {
    if (!this.searchText) return this.escapeHtml(text);

    const escapedQuery = this.escapeRegex(this.searchText);
    const regex = new RegExp(`(${escapedQuery})`, 'gi');

    return this.escapeHtml(text).replace(regex, '<strong class="hl">$1</strong>');
  }

  // Prevent HTML injection
  private escapeHtml(value: string): string {
    if (!value) return '';
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Escape regex symbols
  private escapeRegex(s: string): string {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Remove subscriptions
  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
