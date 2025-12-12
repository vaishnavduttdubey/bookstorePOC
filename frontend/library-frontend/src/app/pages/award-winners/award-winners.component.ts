import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-award-winners',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './award-winners.component.html',
  styleUrls: ['./award-winners.component.css']
})
export class AwardWinnersComponent implements OnInit {

  books: any[] = [];
  private booksService = inject(BooklistService);

  ngOnInit(): void {
    this.booksService.loadBooks();

    this.booksService.allBooks$.subscribe(allBooks => {
      this.books = allBooks.filter(book => book.category === 'Award winner');
    });
  }
}
