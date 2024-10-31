import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-sec-three',
  templateUrl: './sec-three.component.html',
  styleUrls: ['./sec-three.component.scss']
})
export class SecThreeComponent{

  slides = [
    { id:"1",image: 'image 1.png', title: 'Title 1' },
    { id:'2',image: 'image 6.png', title: 'Title 2' },
    { id:'3',image: 'image 3.png', title: 'Title 3' },
    // { id:'4',image: 'image 1.png', title: 'Title 1' },
    // { id:'5',image: 'image 2.png', title: 'Title 2' },
    // { id:'6',image: 'image 3.png', title: 'Title 3' },
    // { id:'7',image: 'image 1.png', title: 'Title 1' },
    // { id:'8',image: 'image 2.png', title: 'Title 2' },
    // { id:'9',image: 'image 3.png', title: 'Title 3' },
    // { id:'10',image: 'image 1.png', title: 'Title 1' },
    // { id:'11',image: 'image 2.png', title: 'Title 2' },
    // { id:'12',image: 'image 3.png', title: 'Title 3' }
  ];



  ngOnInit(): void { }
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    items:1,
    
    // navSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      }
    },
    // nav: true
  }

 
}

