// app-routing.module.ts
import { Routes} from '@angular/router';


export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full' 
    },
  { 
     path: 'home',
    
     loadChildren: () => 
        
        import('./view/home/home.module')
     .then(m => m.HomeModule)
  },
  { 
    path: 'shop',
    loadChildren: () => import('./view/shop/shop.module')
    .then(m => m.ShopModule)
  },
  { 
    path: '**',
    loadChildren: () => import('./view/notfound/notfound.module')
    .then(m => m.NotfoundModule)
  }
];

 
