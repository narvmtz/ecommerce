import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ToDo list';
  item = '';
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
    this.item = '';
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  deleteAll(): void {
    this.items = [];
  }
}
