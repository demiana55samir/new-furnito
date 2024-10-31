import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadshopComponent } from './headshop/headshop.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { ShopRoutingModule } from './shop.routing.module';
import { ShopComponent } from './shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductComparisonComponent } from './product-comparison/product-comparison.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FirstComponent } from './details/first/first.component';
import { SecondComponent } from './details/second/second.component';
import { ThirdComponent } from './details/third/third.component';
import { DetailsComponent } from './details/details.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cartService';



@NgModule({
  declarations: [
    ShopComponent,
    HeadshopComponent, 
    FirstComponent,
    SecondComponent, 
    ThirdComponent,  
    DetailsComponent,
    CheckoutComponent,
    ProductComparisonComponent,
    CartComponent,
    
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedComponentModule,
    ShopRoutingModule,

  ]
})
export class ShopModule { }