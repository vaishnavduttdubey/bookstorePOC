import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-book-details',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

private booksService= inject(BooklistService);
books:any=[];

book:any;
constructor(private routes:ActivatedRoute){
  this.books= this.booksService.books;
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
    const idFromUrl = this.routes.snapshot.paramMap.get('id');
     let bookId = Number(idFromUrl);

      this.book = null;// will start with like no book selected so

      for (let i = 0; i < this.books.length; i++) {
           if (this.books[i].id === bookId) {
             this.book = this.books[i];
    }
  }
}

}
