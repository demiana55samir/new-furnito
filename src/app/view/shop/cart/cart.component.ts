import { Component, OnInit } from '@angular/core';
// import { CartService } from '../../core/services/cartService';
// import { HeadComponent } from '../../shared-component/head/head.component';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  // standalone: true,
  // imports: [, ],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
// implements OnInit 
export class CartComponent {
  // cartItems: { price: number; quantity: number }[] = [];
  // subtotal = 0;
  // constructor(private cartService: CartService) {}

  // ngOnInit(): void {
  //   // Subscribe to cart items from the CartService
  //   this.cartService.cartItems$.subscribe(items => {
  //     this.cartItems = items;
  //     this.calculateSubtotal();
  //   });
  // }

  // // Method to calculate the subtotal of the items in the cart
  // calculateSubtotal(): void {
  //   this.subtotal = this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // }

  // // Method to remove an item from the cart
  // removeFromCart(itemId: number): void {
  //   this.cartService.removeFromCart(itemId);
  // }

  // // Method to increase the quantity of an item in the cart
  // increaseQuantity(itemId: number): void {
  //   this.cartService.updateItemQuantity(itemId, 1);
  // }

  // // Method to decrease the quantity of an item in the cart
  // decreaseQuantity(itemId: number): void {
  //   this.cartService.updateItemQuantity(itemId, -1);
  // }

  // // Method to proceed to checkout
  // checkout(): void {
  //   // Implement your checkout logic here
  //   console.log('Proceeding to checkout');
  // }

  // // Method to clear the cart
  // clearCart(): void {
  //   this.cartService.clearCart();
  // }
}

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.scss'
// })
// export class CartComponent {

// }
