import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
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
