import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
selectBook(_t13: any) {
throw new Error('Method not implemented.');
}

  router = inject(Router);
  private bookService = inject(BooklistService);

  constructor() {}

  ngOnInit(): void {
    // You can load or initialize things here later if needed
  }

}
