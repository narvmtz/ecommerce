import { Component, OnInit, AfterViewInit } from '@angular/core';

import Swiper from 'swiper/bundle';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
// configure Swiper to use modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  swiper!: Swiper;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container');
  }
}
