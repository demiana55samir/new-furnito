import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './homepage/homepage.component';

 const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomePageComponent,
      },
      { 
        path: 'about', 
        component: AboutComponent 
      },

      { 
        path: 'contact', 
        component: ContactComponent 
      },
      { 
        path: 'blog', 
        component: BlogComponent 
      },
      { 
        path: 'header', 
        component: HeaderComponent 
      }
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
