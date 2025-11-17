import { Component, inject, OnInit } from '@angular/core';
import { CartService, Book } from '../cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-tocart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-tocart.component.html',
  styleUrls: ['./add-tocart.component.css']
})
export class AddTocartComponent implements OnInit {

  cartService: CartService = inject(CartService);
  cartItems: Book[] = [];
  totalPrice: number = 0;

  ngOnInit(): void {
    // Get cart items initially
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();

    // Subscribe to cart updates (reactive)
    this.cartService.cartCount$.subscribe(() => {
      this.cartItems = this.cartService.getCartItems();
      this.calculateTotal();
    });
  }

  removeItem(book: Book) {
    this.cartService.removeFromCart(book);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  private calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, book) => sum + book.price, 0);
  }

}
