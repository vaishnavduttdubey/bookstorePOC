import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-best-seller',
  imports: [CommonModule, RouterLink],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent {
books: any=[];
private booksService=inject(BooklistService);
constructor(){
  this.books=this.booksService.books.filter((book:any)=>book.category==='Bestseller');
}
}
