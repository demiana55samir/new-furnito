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
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss'
})
export class RelatedProductsComponent {
  @Input() currentProductId!: number; 
  relatedProducts: RelatedProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadRelatedProducts();
  }

  loadRelatedProducts(): void {
    this.productService.getRelatedProducts(this.currentProductId)
      .subscribe((products: RelatedProduct[]) => {
        this.relatedProducts = products;
      });
  }
}
