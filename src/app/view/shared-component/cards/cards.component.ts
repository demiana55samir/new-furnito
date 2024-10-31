import { Component } from '@angular/core';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  card 
  = [
    {
      title: 'Thesyenia',
      description: 'Stylish Dining Room',
      price: 'Rp 250,000.000',
      image: 'image 1.png',
      discount: null,
    },
    {
      title: 'Thesyenia',
      description: 'Stylish Dining Room',
      price: 'Rp 100,000.000',
      image: 'Images-2.png',
      discount: '-50%',
      originalPrice: 'Rp 150,000.000',
    },
    {
      title: 'Lolito',
      description: 'Luxury big sofa',
      price: 'Rp 7.000.000',
      image: 'image 3.png',
      discount: null,
    },
    {
      title: 'Respira',
      description: 'Outdoor bar table and stool',
      price: 'Rp 500.000',
      image: 'Images.png',
      discount: '-10%',
      originalPrice: 'Rp 500,000.000',
    },

    {
      title: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: 'Rp 2.500.000',
      image: 'Images-1.png',
      discount: '-30%',
    },
    {
      title: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      image: 'Images.png',
      new: true,
    },
    {
      title: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      image: 'image 7.png',
    },
    {
      title: 'Potty',
      description: 'Minimalist flower pot',
      price: 'Rp 500.000',
      originalPrice: 'Rp 1.000.000',
      image: 'Images-2.png',
      discount: '-10%',
    },
  ];
}
