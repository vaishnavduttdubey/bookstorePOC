import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  private booksService = inject(BooklistService);
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);

  book: any = null;

  ngOnInit(): void {
    this.booksService.loadBooks();

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.booksService.allBooks$.subscribe(books => {
      this.book = books.find(b => b.id === id);
    });
  }

  addToCart(book: any) {
    this.cartService.addToCart(book);
  }
}
