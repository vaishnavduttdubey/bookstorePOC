import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-award-winners',
 imports: [CommonModule, RouterLink],
  templateUrl: './award-winners.component.html',
  styleUrl: './award-winners.component.css'
})
export class AwardWinnersComponent {
  books: any=[];
 private booksService= inject(BooklistService);
 constructor(){
  this.books=this.booksService.books.filter((book: any) => book.category === 'Award winner');
 }
}
