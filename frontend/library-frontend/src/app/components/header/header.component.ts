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
  // --- Injected services (standalone component style) ---
  router = inject(Router);
  cartService = inject(CartService);
  bookService = inject(BooklistService);

  // --- UI state ---
  cartCount: number = 0;
  searchText: string = '';           // bound to input
  suggestions: any[] = [];           // current suggestion list
  showSuggestions: boolean = false;  // whether dropdown is visible
  selectedIndex: number = -1;        // keyboard nav index (-1 = none)

  // --- internal streams & subscriptions ---
  private searchSubject = new Subject<string>(); // debounced input
  private subs: Subscription[] = [];

  /**
   * Initialize:
   * - load initial books (if your service requires it)
   * - subscribe to cart count
   * - create a single debounced search subscription
   * - subscribe once to filteredBooks$ (single subscription)
   * - reset search on route change
   */
  ngOnInit(): void {
    // If your BooklistService needs a load call (keeps existing behavior)
    this.bookService.loadBooks();

    // Keep track of cart count (unsubscribe on destroy)
    this.subs.push(
      this.cartService.cartCount$.subscribe(count => (this.cartCount = count))
    );

    // Debounce user input before calling the search function in service
    this.subs.push(
      this.searchSubject
        .pipe(debounceTime(300), distinctUntilChanged())
        .subscribe(query => {
          // If query is empty, we clear UI and avoid firing a search network call
          if (!query || query.trim() === '') {
            this.clearSuggestions();
            return;
          }
          // ask service to search (service should update filteredBooks$)
          this.bookService.searchBooks(query.trim());
        })
    );

    // Single subscription to filteredBooks$ which the service updates
    this.subs.push(
      this.bookService.filteredBooks$.subscribe(result => {
        // protect against stale emissions when input is empty
        if (!this.searchText || this.searchText.trim() === '') {
          this.clearSuggestions();
          return;
        }

        // limit results for UI (real projects typically limit to 5-8)
        this.suggestions = (result || []).slice(0, 8);
        this.showSuggestions = this.suggestions.length > 0;
        this.selectedIndex = -1; // reset keyboard index when results change
      })
    );

    // Reset/clear search when route changes (so navigation doesn't re-open the popup)
    this.subs.push(
      this.router.events
        .pipe(filter(e => e instanceof NavigationEnd))
        .subscribe(() => this.resetAll())
    );
  }

  /**
   * Called on every input event (bound in template).
   * We update local value and push to debounced subject.
   */
  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.searchText = value;
    this.searchSubject.next(value);
  }

  /**
   * Select suggestion (click or Enter). We navigate and clear UI.
   */
  selectSuggestion(book: any): void {
    if (!book) return;
    this.resetAll(); // clear UI before navigate (prevents odd re-open)
    this.router.navigate(['/book', book.id]);
  }

  /**
   * Hide suggestions when input loses focus.
   * A small timeout ensures clicks on suggestion items register before we hide.
   *
   * We CLEAR searchText and suggestions here to prevent the service from
   * re-emitting results and reopening the popup after blur.
   */
  hideSuggestions() {
    setTimeout(() => {
      this.clearSuggestions();
    }, 150); // small delay lets click on a suggestion go through
  }

  /**
   * Helper to clear only suggestions UI but keep searchText (if you prefer).
   * Here we clear searchText as well to prevent the repeated auto-open problem.
   */
  clearSuggestions() {
    this.showSuggestions = false;
    this.suggestions = [];
    this.selectedIndex = -1;
    this.searchText = ''; // important: clear text so filteredBooks$ won't re-trigger popup
  }

  /**
   * Full reset used on navigation or explicit resets.
   * Clears everything (cart remains untouched).
   */
  resetAll() {
    this.clearSuggestions();
  }

  /**
   * Keyboard navigation:
   * - ArrowDown / ArrowUp to move through suggestions
   * - Enter to select
   * - Escape to close
   *
   * Using HostListener on document so arrow keys work even when input has focus
   * (but we check showSuggestions to prevent interfering with other keyboard behavior).
   */
  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (!this.showSuggestions || !this.suggestions.length) return;

    if (event.key === 'ArrowDown') {
      this.selectedIndex = (this.selectedIndex + 1) % this.suggestions.length;
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.suggestions.length) % this.suggestions.length;
      event.preventDefault();
    } else if (event.key === 'Enter') {
      if (this.selectedIndex >= 0 && this.selectedIndex < this.suggestions.length) {
        this.selectSuggestion(this.suggestions[this.selectedIndex]);
        event.preventDefault();
      }
    } else if (event.key === 'Escape') {
      this.clearSuggestions();
    }
  }

  /**
   * Small helper used in template to highlight matched text.
   * Returns HTML string with <strong> around matched terms.
   * We use [innerHTML] for rendering; keep searchText safe/controlled.
   */
  highlight(text: string): string {
    if (!this.searchText) return this.escapeHtml(text);
    const escapedQuery = this.escapeRegex(this.searchText);
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    // wrap match with strong (you can style strong in CSS)
    return this.escapeHtml(text).replace(regex, '<strong class="hl">$1</strong>');
  }

  /** Utility: escape HTML to avoid XSS from book data */
 private escapeHtml(value: string): string {
    if (!value) return '';
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /** Utility: escape regex special chars in user query */
  private escapeRegex(s: string) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // clean up all subscriptions
  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}
