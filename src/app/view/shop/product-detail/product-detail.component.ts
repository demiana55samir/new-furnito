import { Component } from '@angular/core';
import { CartService } from '../../../core/services/cartService';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  
  product = {
    name: 'Asgaard sofa',
    price: 250000,
    description: 'A stylish sofa with a modern look.',
    colors: ['Black', 'White', 'Gray'],
    images: ['image 1.png', 'image 2.png']
  };

  // private cartService:CartService
  constructor( ) {}

  // addToCart() {
  //   this.cartService.addToCart(this.product);
  // }

  selectColor(color: string) {
    // Logic to handle color selection
  }
}

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product-detail',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './product-detail.component.html',
//   styleUrl: './product-detail.component.scss'
// })
// export class ProductDetailComponent {

// }
