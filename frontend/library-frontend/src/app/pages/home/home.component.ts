import { Component, ElementRef, ViewChild, inject } from '@angular/core';
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
export class HomeComponent {
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  trendingBooks: any = [];
  choiceBooks: any = [];
  arrivalBooks: any = [];

  private booksService = inject(BooklistService);

  constructor() {
    const books = this.booksService.books;

    //  Trending books → Only 5-star books (top 10 max)
    this.trendingBooks = books
      .filter((book: any) => this.getNumericRating(book.rating) === 5)
      .slice(0, 10);

    //  New Arrivals
    this.arrivalBooks = books.filter(
      (book: any) => book.category === 'New Arrival'
    );

    //  Find Your Choice → random 10 books (for variety)
    this.choiceBooks = [...books]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);
  }

  //  Convert ratings
  getNumericRating(rating: any): number {
    if (typeof rating === 'number') return rating;
    if (typeof rating === 'string') {
      return (rating.match(/★/g) || []).length;
    }
    return 0;
  }

  //  Slider scroll functions
  slideLeft() {
    if (this.slider)
      this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  slideRight() {
    if (this.slider)
      this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
