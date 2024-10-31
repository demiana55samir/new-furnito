import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private cartItems = new BehaviorSubject<any[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(item: any): void {
    const items = this.cartItems.getValue();
    const existingItem = items.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.push({ ...item, quantity: item.quantity || 1 });
    }

    this.cartItems.next(items);
  }

  removeFromCart(itemId: number): void {
    const items = this.cartItems.getValue().filter(item => item.id !== itemId);
    this.cartItems.next(items);
  }

  updateItemQuantity(itemId: number, change: number): void {
    const items = this.cartItems.getValue().map(item => {
      if (item.id === itemId) {
        const updatedQuantity = item.quantity + change;
        return { ...item, quantity: Math.max(updatedQuantity, 1) };
      }
      return item;
    });

    this.cartItems.next(items);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }
  /********************************************* */
//   cartItems = [];

//   addToCart(item: any) {
//     this.cartItems.push(item);
//   }

//   getCartItems() {
//     return this.cartItems;
//   }

//   removeFromCart(item: any) {
//     this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
//   }

//   getCartSubtotal() {
//     return this.cartItems.reduce((total, item) => total + item.price, 0);
//   }
}
