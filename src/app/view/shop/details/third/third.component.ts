import { Component } from '@angular/core';
import { Card } from '../../../../core/models/card';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.scss',
})
export class ThirdComponent {
  cards: Card[] = [
    {
      title: 'Grifo',
      description: 'Night lamp',
      price: 'Rp 1.500.000',
      originalPrice: 'Rp 2.500.000',
      image: 'Images-1.png',
      discount: '',
    },
    {
      title: 'Muggo',
      description: 'Small mug',
      price: 'Rp 150.000',
      image: 'Images.png',
      originalPrice: 'Rp 2.500.000',
      discount: '-30%',
    },
    {
      title: 'Pingky',
      description: 'Cute bed set',
      price: 'Rp 7.000.000',
      image: 'image 7.png',
      originalPrice: 'Rp 2.500.000',
      discount: '',
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

  constructor() {}

  ngOnInit(): void {}

  // card
  // = [
  //   {
  //     title: 'Grifo',
  //     description: 'Night lamp',
  //     price: 'Rp 1.500.000',
  //     originalPrice: 'Rp 2.500.000',
  //     image: 'Images-1.png',
  //     discount: '-30%',
  //   },
  //   {
      // title: 'Muggo',
      // description: 'Small mug',
      // price: 'Rp 150.000',
      // image: 'Images.png',
      // new: true,
  //   },
  //   {
      // title: 'Pingky',
      // description: 'Cute bed set',
      // price: 'Rp 7.000.000',
      // image: 'image 7.png',
  //   },
  //   {
      // title: 'Potty',
      // description: 'Minimalist flower pot',
      // price: 'Rp 500.000',
      // originalPrice: 'Rp 1.000.000',
      // image: 'Images-2.png',
      // discount: '-10%',
  //   },
  // ];
}
