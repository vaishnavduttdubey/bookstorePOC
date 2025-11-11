import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-todays-deal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todays-deal.component.html',
  styleUrls: ['./todays-deal.component.css']
})
export class TodaysDealComponent {
 books: any=[];
 private booksService = inject(BooklistService);

 constructor(){
  this.books= this.booksService.books.filter((book: any) => book.category === "Today's Deal");
 }

}
