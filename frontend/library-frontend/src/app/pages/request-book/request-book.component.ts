import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { BooklistService } from '../../booklist.service';

@Component({
  selector: 'app-request-book',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent {

  constructor(private bookService: BooklistService) {}

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl(''),
    quantity: new FormControl(1, [Validators.min(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('')
  });

  onSubmit() {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    // Map form fields → backend fields
    const payload = {
      bookName: this.bookForm.value.title,
      authorName: this.bookForm.value.author,
      quantity: this.bookForm.value.quantity,
      userEmail: this.bookForm.value.email,
      phone: this.bookForm.value.phone,
      message: 'Requested from UI'
    };

    this.bookService.requestBook(payload).subscribe({
      next: () => {
        alert('Book request submitted successfully!');
        this.bookForm.reset({ quantity: 1 });
      },
      error: () => {
        alert('Something went wrong. Please try again.');
      }
    });
  }
}
