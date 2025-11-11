import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    // Create the signup form with basic validation
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  onSubmit() {
    // If form is valid, show success message
    if (this.signupForm.valid) {
      console.log('Signup Data:', this.signupForm.value);
      alert('Signup successful!');
      this.signupForm.reset(); // clear form
    } else {
      // mark all fields so errors show up
      this.signupForm.markAllAsTouched();
      alert('Please fill all required fields correctly.');
    }
  }
}
