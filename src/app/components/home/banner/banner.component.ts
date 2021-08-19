import { Component, OnInit } from '@angular/core';

import { Banner } from './banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  images: Banner[] = [
    { imgUrl: 'https://media.wizards.com/2016/images/daily/WkrSeoBmCN.jpg' },
    {
      imgUrl:
        'https://as.com/meristation/imagenes/2020/09/03/noticias/1599127190_301697_1599127352_noticia_normal.jpg',
    },
    {
      imgUrl:
        'https://i.pinimg.com/originals/f4/64/fd/f464fd3604d3ad8c1813d1f6731caa3f.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
