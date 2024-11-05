import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadshopComponent } from './headshop/headshop.component';
import { SharedComponentModule } from '../shared-component/shared-component.module';
import { ShopRoutingModule } from './shop.routing.module';
import { ShopComponent } from './shop.component';
import { CartComponent } from './cart/cart.component';
import { ProductComparisonComponent } from './product-comparison/product-comparison.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FirstComponent } from '../shared-component/details/first/first.component';
import { SecondComponent } from '../shared-component/details/second/second.component';
import { ThirdComponent } from '../shared-component/details/third/third.component';
import { DetailsComponent } from '../shared-component/details/details.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cartService';
import { ShopPageComponent } from './shop-page/shop-page.component';



@NgModule({
  declarations: [
    ShopComponent,
    HeadshopComponent,   
    CheckoutComponent,
    ProductComparisonComponent,
    CartComponent,
    ShopPageComponent
    
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedComponentModule ,
    ShopRoutingModule,

  ],
  exports:[
    ShopRoutingModule
  ]
})
export class ShopModule { }
