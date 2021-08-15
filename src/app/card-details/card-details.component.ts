import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Card } from './card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent {
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

  addCart() {
    console.log('added to cart');
    this.cardClicked.emit(this.card.id);
  }
}