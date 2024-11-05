import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { RewardComponent } from './reward/reward.component';
import { CardsComponent } from './cards/cards.component';
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
