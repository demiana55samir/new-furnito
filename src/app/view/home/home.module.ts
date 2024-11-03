import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { HomeRoutingModule } from './home.routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SharedComponentModule } from "../shared-component/shared-component.module";
import { HeaderComponent } from './header/header.component';
import { SectOneComponent } from './sect-one/sect-one.component';
import { SecTwoComponent } from './sec-two/sec-two.component';
import { SecThreeComponent } from './sec-three/sec-three.component';
import { SecFourComponent } from './sec-four/sec-four.component';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    ContactComponent,
    BlogComponent,
    AboutComponent,
    HeaderComponent,
    SectOneComponent,
    SecTwoComponent,
    SecThreeComponent,
    SecFourComponent,
    HomeComponent,
    HomePageComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterOutlet,
    RouterLink,
    CarouselModule,
    SharedComponentModule
],
exports:[
  HomeRoutingModule
]
})
export class HomeModule { }
