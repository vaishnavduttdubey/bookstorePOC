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

  @ViewChild('slider') slider!: ElementRef;

  trendingBooks: any[] = [];
  choiceBooks: any[] = [];
  arrivalBooks: any[] = [];

  private booksService = inject(BooklistService);

  ngOnInit(): void {
    // Load books initially
    this.booksService.loadBooks();

    //  Home page should listen ONLY to allBooks$ (NOT search results)
    this.booksService.allBooks$.subscribe((books: any[]) => {
      if (!books.length) return;

      this.trendingBooks = books
        .filter(b => this.getNumericRating(b.rating) === 5)
        .slice(0, 10);

      this.arrivalBooks = books.filter(b => b.category === 'New Arrival');

      this.choiceBooks = [...books]
        .sort(() => Math.random() - 0.5)
        .slice(0, 12);
    });
  }

  getNumericRating(rating: any): number {
    return (rating.match(/★/g) || []).length;
  }

  slideLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  slideRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
