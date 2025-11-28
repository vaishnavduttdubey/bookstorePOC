import { Component } from '@angular/core';
import { BooklistService } from './booklist.service';
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, FooterComponent, HeaderComponent]
})
export class AppComponent {

  constructor(private bookService: BooklistService) {}

  ngOnInit() {
    this.bookService.loadBooks();




  }
}
