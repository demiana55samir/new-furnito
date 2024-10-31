import { Component } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  
  count = 1;

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 1) {
      this.count--;
    }
  }
  cover = "Asgaard .png";

  changeImage(newImage: string): void {
    this.cover = newImage;
  }
  
}
