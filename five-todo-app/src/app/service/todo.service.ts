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
        title: 'Learn React Native',
        isCompleted: false,
        date: new Date(),
      },
    ];
  }

  // We need to observe our service that, whenever you are done please give me the data, FOT THIS WE ARE USING OF

  getTodo = () => {
    return of(this.todos);
  };

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  };

  updateTodo = (todo: Todo) => {
    this.todos.map((individualTodo) => {
      if (individualTodo.id == todo.id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
  };

  // deleteTodo = (todo:Todo) => {
  //   this.todos.map((individualTodo) => {
  //     if(individualTodo.id == todo.id){
  //       this.todos.splice(0, 1);

  //     }

  //   })

  deleteTodo = (todo: Todo) => {
    const indexofTodo = this.todos.findIndex(
      (individualTodo) => individualTodo.id === todo.id
    );
    this.todos.splice(0, 1);
  };
}
