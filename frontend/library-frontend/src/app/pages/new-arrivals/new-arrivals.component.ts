import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-new-arrivals',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  books: any[] = [];
  private booksService = inject(BooklistService);

  ngOnInit(): void {
    this.booksService.loadBooks();

    this.booksService.filteredBooks$.subscribe(allBooks => {
      this.books = allBooks.filter(book => book.category === 'New Arrival');
    });
  }
}
