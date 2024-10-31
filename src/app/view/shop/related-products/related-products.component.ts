import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductService } from '../../../core/services/prosuctService';


interface RelatedProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  isOnSale?: boolean; 
}

@Component({
  selector: 'app-related-products',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss'
})
export class RelatedProductsComponent {
  @Input() currentProductId!: number; // ID of the currently viewed product
  relatedProducts: RelatedProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadRelatedProducts();
  }

  // Method to load related products based on the current product ID
  loadRelatedProducts(): void {
    this.productService.getRelatedProducts(this.currentProductId)
      .subscribe((products: RelatedProduct[]) => {
        this.relatedProducts = products;
      });
  }
}
