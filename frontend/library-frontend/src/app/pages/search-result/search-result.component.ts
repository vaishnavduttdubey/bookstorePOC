import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchResults: any[] = [];

  private route = inject(ActivatedRoute);
  private bookService = inject(BooklistService);
  private router = inject(Router);

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const query = params['q'];

      if (!query || query.trim() === '') {
        this.searchResults = [];
        return;
      }

      this.searchResults = this.bookService.fullSearch(query);
    });
  }

  openBook(bookId: number) {
    this.router.navigate(['/book', bookId]);
  }
}
