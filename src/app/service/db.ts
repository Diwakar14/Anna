import { faker } from '@faker-js/faker/locale/en_IN';
import Dexie, { Table } from 'dexie';

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

export class AppDB extends Dexie {
  todoItems!: Table<TodoItem, number>;
  todoLists!: Table<TodoList, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(4).stores({
      todoLists: '++id',
      todoItems: '++id, todoListId, title',
    });
    this.on('populate', () => this.populate());
  }

  async populate() {
    const todoListId = await db.todoLists.add({
      title: 'To Do Today',
    });

    let todos = [];
    for (let i = 0; i < 300000; i++) {
      todos.push({
        todoListId,
        title: faker.person.fullName(),
        gender: faker.person.gender(),
        job: faker.person.jobType(),
      });
    }

    await db.todoItems.bulkAdd(todos);
  }
}

export const db = new AppDB();
