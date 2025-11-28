import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {

  books: any[] = [];
  private booksService = inject(BooklistService);

  ngOnInit(): void {
    this.booksService.loadBooks();

    this.booksService.filteredBooks$.subscribe(allBooks => {
      this.books = allBooks.filter(book => book.category === 'Bestseller');
    });
  }
}
