import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService, Book } from '../cart.service';

@Component({
  selector: 'app-add-tocart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.css']
})
export class AddTocartComponent implements OnInit {

  private cartService = inject(CartService);

  cartItems: Book[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    this.loadCartItems();

    this.cartService.cartCount$.subscribe(() => {
      this.loadCartItems();
    });
  }

  private loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeItem(book: Book) {
    this.cartService.removeFromCart(book);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  private calculateTotal() {
    this.totalPrice = this.cartItems.reduce(
      (sum, book) => sum + book.price,
      0
    );
  }
}
