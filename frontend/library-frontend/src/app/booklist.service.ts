import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {
getBookImage(arg0: any) {
throw new Error('Method not implemented.');
}

  private baseUrl = 'http://localhost:8080/books';

  books: any[] = [];

  //  Only for Home page (NOT affected by search)
  private allBooksSubject = new BehaviorSubject<any[]>([]);
  allBooks$ = this.allBooksSubject.asObservable();

  //  For autocomplete suggestions in Header
  private filteredBooksSubject = new BehaviorSubject<any[]>([]);
  filteredBooks$ = this.filteredBooksSubject.asObservable();


  constructor(private http: HttpClient) {}

  // Load all books
  loadBooks() {
    this.http.get<any[]>(this.baseUrl).subscribe(data => {
      this.books = data;

      //  Home page only listens to this
      this.allBooksSubject.next(data);

      console.log("Books loaded:", this.books);
    });
  }

  // AUTOCOMPLETE search (Header only)
  searchBooks(query: string): void {
    if (!query.trim()) {
      this.filteredBooksSubject.next([]);
      return;
    }

    const regex = new RegExp(query, 'i');
    const filtered = this.books.filter(
      (book: any) =>
        regex.test(book.title) ||
        regex.test(book.author)
    );

    this.filteredBooksSubject.next(filtered);
  }

  // FULL SEARCH (Search Page only)
  fullSearch(query: string): any[] {
    const regex = new RegExp(query, 'i');
    return this.books.filter(
      (b: any) =>
        regex.test(b.title) ||
        regex.test(b.author)
    );
  }

  requestBook(data: any) {
  return this.http.post(
    'http://localhost:8080/book-requests',
    data
  );
}

}
