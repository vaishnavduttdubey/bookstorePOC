import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-box-set',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './box-set.component.html',
  styleUrls: ['./box-set.component.css']
})
export class BoxSetComponent implements OnInit {

  books: any[] = [];
  private booksService = inject(BooklistService);

  ngOnInit(): void {
    this.booksService.loadBooks();

    this.booksService.filteredBooks$.subscribe(allBooks => {
      this.books = allBooks.filter(book => book.category === 'Box Set');
    });
  }
}
