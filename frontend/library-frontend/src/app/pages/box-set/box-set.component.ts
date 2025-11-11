import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-box-set',
  imports: [CommonModule, RouterLink],
  templateUrl: './box-set.component.html',
  styleUrls: ['./box-set.component.css']
})
export class BoxSetComponent {

books: any=[];
private booksService = inject(BooklistService);
constructor(){
  this.books= this.booksService.books.filter((book: any) => book.category === 'Box Set');
  console.log(this.books);
}
}
