import { Component, OnInit } from '@angular/core';

import { CardsService } from '../services/cards.service';
import { Card } from '../card-details/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  searchText = '';
  cards: Card[] = [];

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cards = this.cardsService.getAllCards();
  }

  clickCard(id: string) {
    console.log('Card: ');
    console.log(id);
  }
}
