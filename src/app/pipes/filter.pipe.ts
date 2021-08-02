import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../card.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // transform(value: Card[], filterBy: any): Card[] {
  //   filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
  //   return filterBy
  //     ? value.filter(
  //         (card: Card) => card.name.toLocaleLowerCase().indexOf(filterBy) !== -1
  //       )
  //     : value;
  // }
  transform(value: Card[], filterBy: string): Card[] {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      return value.filter(
        (card: Card) => card.name.toLocaleLowerCase().indexOf(filterBy) !== -1
      );
    } else {
      return value;
    }
  }
}
