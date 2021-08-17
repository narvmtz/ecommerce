import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { Card } from '../card-details/card.model';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-card-detailed',
  templateUrl: './card-detailed.component.html',
  styleUrls: ['./card-detailed.component.scss'],
})
export class CardDetailedComponent implements OnInit {
  card?: Card;
  card$!: Observable<Card | undefined>;

  constructor(
    // private router: Router,
    private route: ActivatedRoute,
    // private cardsService: CardsService,
    private service: CardsService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    // const id = params.id;
    // //   console.log(id);
    // this.card = this.cardsService.getCards(id);
    // if (!this.card) {
    //   this.router.navigate(['/page-no-found']);
    // }
    // });

    this.card$ = this.route.paramMap.pipe(
      map((params: ParamMap) => this.service.getCards(params.get('id')!))
    );

    // this.getCards();
  }

  // getCards(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   this.cardsService
  //     .getCards(id)
  //     .subscribe((card: Card) => (this.card = card));
  // }
}
