import { Component } from '@angular/core';
import Dexie, { Table, liveQuery } from 'dexie';
import { db } from 'src/app/service/db';

export interface TodoList {
  id?: number;
  title: string;
}
export interface TodoItem {
  id?: number;
  todoListId: number;
  title: string;
  done?: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent extends Dexie {
  /**
   * Total Items
   */
  totalItems: number = 0;

  /**
   * Searching
   */
  searching: boolean = false;

  todoLists$ = liveQuery(async () => {
    return db.todoItems.limit(10000).sortBy('title');
  });
  listName = 'My new list';

  searchItem: string = '';

  async addNewList() {
    await db.todoLists.add({
      title: this.listName,
    });
  }

  identifyList(index: number, list: TodoList) {
    return `${list.id}${list.title}`;
  }

  async sort() {
    let searched = await db.todoItems.reverse().sortBy('id');
    console.log(searched);
  }

  async search(value: string) {
    console.log(value);
    this.searching = true;

    if (value) {
      let data = (this.searching = false);
      // this.totalItems = data.length;
      this.todoLists$ = liveQuery(async () => {
        const items = await db.todoItems
          .where('title')
          .startsWithAnyOfIgnoreCase(value)
          .toArray();

        this.totalItems = items.length;
        return items;
      });
      // console.log(data);
    } else {
      this.searching = false;
    }
  }
}
