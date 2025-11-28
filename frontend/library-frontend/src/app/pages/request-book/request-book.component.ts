import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, MaxLengthValidator } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-request-book',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './request-book.component.html',
  styleUrls: ['./request-book.component.css']
})
export class RequestBookComponent {
  bookForm = new FormGroup({

    title: new FormControl('', [Validators.required]),
    author: new FormControl(''),
    quantity: new FormControl(1, [Validators.min(1)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''  )
  });

  onSubmit() {
    if (this.bookForm.valid) {
      alert('Book request submitted successfully!');
      console.log(this.bookForm.value);
      this.bookForm.reset();
    } else {
      this.bookForm.markAllAsTouched();


    }
  }
}
