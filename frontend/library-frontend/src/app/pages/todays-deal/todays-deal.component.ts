import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-todays-deal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todays-deal.component.html',
  styleUrls: ['./todays-deal.component.css']
})
export class TodaysDealComponent implements OnInit {

  books: any[] = [];
  private booksService = inject(BooklistService);

  ngOnInit(): void {
    this.booksService.loadBooks();

    this.booksService.filteredBooks$.subscribe(allBooks => {
      this.books = allBooks.filter(book => book.category === "Today's Deal");
    });
  }
}
