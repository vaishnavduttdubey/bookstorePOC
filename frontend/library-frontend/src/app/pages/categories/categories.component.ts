import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  books: any[] = [];
  category: string = '';

  private booksService = inject(BooklistService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';
      this.loadCategoryBooks();
    });

    this.booksService.loadBooks();
  }

  loadCategoryBooks() {
    this.booksService.filteredBooks$.subscribe(allBooks => {
      this.books = allBooks.filter(book => book.category === this.category);
    });
  }
}
