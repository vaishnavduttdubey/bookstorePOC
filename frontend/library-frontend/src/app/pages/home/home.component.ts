import { Component, ElementRef, ViewChild, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  trendingBooks: any[] = [];
  choiceBooks: any[] = [];
  arrivalBooks: any[] = [];
  filteredBooks: any[] = [];

  private booksService = inject(BooklistService);

  ngOnInit(): void {
    const books = this.booksService.books;

    // Static homepage data
    this.trendingBooks = books
      .filter((book: any) => this.getNumericRating(book.rating) === 5)
      .slice(0, 10);

    this.arrivalBooks = books.filter(
      (book: any) => book.category === 'New Arrival'
    );

    this.choiceBooks = [...books]
      .sort(() => Math.random() - 0.5)
      .slice(0, 12);

    // Listen for filtered search results
    this.booksService.filteredBooks$.subscribe((results) => {
      this.filteredBooks = results;
    });
  }

  getNumericRating(rating: any): number {
    if (typeof rating === 'number') return rating;
    if (typeof rating === 'string') return (rating.match(/★/g) || []).length;
    return 0;
  }

  slideLeft() {
    if (this.slider)
      this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  slideRight() {
    if (this.slider)
      this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
