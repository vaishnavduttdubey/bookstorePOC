import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooklistService } from '../../booklist.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  private booksService = inject(BooklistService);
  private cartService = inject(CartService);
  private routes = inject(ActivatedRoute);

  books: any[] = [];
  book: any;

  constructor() {
    this.books = this.booksService.books;
  }

  ngOnInit(): void {
    const idFromUrl = this.routes.snapshot.paramMap.get('id');
    const bookId = Number(idFromUrl);

    this.book = this.books.find(b => b.id === bookId);
  }

  addToCart(book: any) {
    this.cartService.addToCart(book);
  }
}
