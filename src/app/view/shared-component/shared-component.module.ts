import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { RewardComponent } from './reward/reward.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    HeadComponent,
    RewardComponent,
    CardsComponent,
  ],
  imports: [
    CommonModule,
    RouterLink ,
    RouterLinkActive
   
  ],
  exports:[
    RewardComponent,
    CardsComponent,
    HeadComponent
  ]
})
export class SharedComponentModule { }
