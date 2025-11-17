import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
  rating: string;
  category: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Book[] = [];

  // Observable to track cart count
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  constructor() {}

  addToCart(book: Book) {
    const exists = this.cartItems.find(item => item.id === book.id);
    if (!exists) {
      this.cartItems.push(book);
      this.updateCartCount();
      console.log('Book added to cart:', book);
    }
  }

  removeFromCart(book: Book) {
    this.cartItems = this.cartItems.filter(item => item.id !== book.id);
    this.updateCartCount();
  }

  getCartItems(): Book[] {
    return this.cartItems;
  }

  getCartCount(): number {
    return this.cartItems.length;
  }

  clearCart() {
    this.cartItems = [];
    this.updateCartCount();
  }

  private updateCartCount() {
    this.cartCountSubject.next(this.cartItems.length);
  }
}
