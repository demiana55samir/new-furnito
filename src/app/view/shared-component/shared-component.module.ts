import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { RewardComponent } from './reward/reward.component';
import { CardsComponent } from './cards/cards.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FirstComponent } from './details/first/first.component';
import { SecondComponent } from './details/second/second.component';
import { ThirdComponent } from './details/third/third.component';



@NgModule({
  declarations: [
    HeadComponent,
    RewardComponent,
    CardsComponent,
    DetailsComponent,
    FirstComponent,
    SecondComponent, 
    ThirdComponent,

  ],
  imports: [
    CommonModule,
    RouterLink ,
    RouterLinkActive
   
  ],
  exports:[
    RewardComponent,
    CardsComponent,
    HeadComponent,
    DetailsComponent,
    FirstComponent,
    SecondComponent, 
    ThirdComponent,
  ]
})
export class SharedComponentModule { }
