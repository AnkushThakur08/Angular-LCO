import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/service/todo.service';

import { Todo } from '../../model/Todo';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todoTitle: string = '';

  ngOnInit(): void {}

  addTodo = () => {
    const newTodo: Todo = {
      id: uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date(),
    };

    this.todoService.addTodo(newTodo);
    this.todoTitle = '';
  };
}
