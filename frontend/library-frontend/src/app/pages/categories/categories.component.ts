import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  books: any = [];
  category: string = '';
  private booksService = inject(BooklistService);
  private route = inject(ActivatedRoute);

  constructor() {
    // get category name from route (like 'Comedy', 'Sports' etc.)
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.books = this.booksService.books.filter(
        (book: any) => book.category === this.category
      );
    });
  }
}
