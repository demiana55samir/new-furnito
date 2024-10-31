import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { SharedComponentModule } from './view/shared-component/shared-component.module';
import { LayoutModule } from './view/layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    RouterOutlet,
    SharedComponentModule,
    LayoutModule
  ],
  bootstrap: [
     AppComponent 
    ],
})
export class AppModule { }
