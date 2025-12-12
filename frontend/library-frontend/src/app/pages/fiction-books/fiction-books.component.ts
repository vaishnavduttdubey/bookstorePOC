import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-fiction-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './fiction-books.component.html',
  styleUrls: ['./fiction-books.component.css']
})
export class FictionBooksComponent implements OnInit {

  books: any[] = [];
  private booksService = inject(BooklistService);

  ngOnInit(): void {
    this.booksService.loadBooks();

    this.booksService.allBooks$.subscribe(allBooks => {
      this.books = allBooks.filter(book => book.category === 'Fiction');
    });
  }
}
