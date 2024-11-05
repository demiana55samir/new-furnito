import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComparisonComponent } from './product-comparison/product-comparison.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ShopPageComponent } from './shop-page/shop-page.component';




const routes: Routes = [

    {
      path: '',
      component: ShopComponent,
      children: [
        { 
          path: '', 
          redirectTo: 'shop', 
          pathMatch: 'full' 
        },
        {
          path: 'shop',
          component:ShopPageComponent 
        },
        {
          path: 'cart',
          component:CartComponent
      },
      {
        path: 'checkout',
        component:CheckoutComponent
    },
    {
      path: 'relatedProducts',
      component:RelatedProductsComponent
  },
    {
      path: 'product-comparison',
      component:ProductComparisonComponent
  }
      ],
    }
    
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class ShopRoutingModule {}

