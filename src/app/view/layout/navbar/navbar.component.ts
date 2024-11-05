import { Component } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
  image:string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Asgaard sofa',
      price: 250000,
      quantity: 1,
      image:'/assets/cov.png',
      subtotal: 250000,
    },
    // { id: 2, name: 'Nordic chair', price: 50000, quantity: 2, subtotal: 100000 },
  ];

  deleteItem(itemId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
  }
}
