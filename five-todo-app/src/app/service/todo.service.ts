import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // create a varibale todos, of Type Array. BUT NOT NORMAL ARRAY. TYPE-TODO Array
  todos: Todo[];
  constructor() {
    // hardcore some values
    this.todos = [
      {
        id: '111',
        title: 'Learn React',
        isCompleted: true,
        date: new Date(),
      },

      {
        id: '222',
        title: 'Learn Angular',
        isCompleted: true,
        date: new Date(),
      },

      {
        id: '333',
        title: 'Learn Angular',
        isCompleted: true,
        date: new Date(),
      },
    ];
  }
}
