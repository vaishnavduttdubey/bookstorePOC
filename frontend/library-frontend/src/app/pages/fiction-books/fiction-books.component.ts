import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-fiction-books',
  imports: [CommonModule ,RouterLink],
  templateUrl: './fiction-books.component.html',
  styleUrl: './fiction-books.component.css'
})
export class FictionBooksComponent {
books :any=[];
private booksService=inject(BooklistService);
constructor(){
  this.books=this.booksService.books.filter((book:any)=>book.category==='Fiction');
}
}
