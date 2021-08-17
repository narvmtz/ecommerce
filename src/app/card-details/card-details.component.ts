import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  @Input()
  card!: Card;

  // //Changing the tsconfig.json file
  // "compilerOptions": { ... ,
  // "strictPropertyInitialization": false}

  //  //Declaring the vble twice
  // @Input() card: Card = Input();

  // constructor() {
  //   // Initialization inside the constructor
  //   this.card = Input();
  // }

  @Output() cardClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addCart() {
    console.log('added to cart');
    this.cardClicked.emit(this.card.id);
  }

  faCart = faCartPlus;
}
