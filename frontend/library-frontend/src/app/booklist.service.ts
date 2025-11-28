import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  private baseUrl = 'http://localhost:8080/books';

  books: any[] = [];

  private filteredBooksSubject = new BehaviorSubject<any[]>([]);
  filteredBooks$ = this.filteredBooksSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Load all books from backend
  loadBooks() {
    this.http.get<any[]>(this.baseUrl).subscribe(data => {
      this.books = data;              // store in service
      this.filteredBooksSubject.next(this.books);
      console.log("Books loaded:", this.books);
    });
  }

  // Search method for header search box
  searchBooks(query: string): void {
    if (!query.trim()) {
      this.filteredBooksSubject.next([]);
      return;
    }

    const regex = new RegExp(query, 'i');
    const filtered = this.books.filter(
      (book: any) => regex.test(book.title) || regex.test(book.author)
    );

    this.filteredBooksSubject.next(filtered);
  }
}
