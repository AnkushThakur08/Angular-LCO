import { Component, OnInit } from '@angular/core';

// Service
import { TodoService } from 'src/app/service/todo.service';

// Model
import { Todo } from '../../model/Todo';

// FontAwesome
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})

/* OnInit is already Implemented on the class, this loads up when component got intalised */
export class TodosComponent implements OnInit {
  faTrashAltIcon = faTrashAlt;
  myTodos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  /* LIfecycle Event */
  ngOnInit(): void {
    // As soon as this component loads up, we want
    this.todoService.getTodo().subscribe((allTodos) => {
      this.myTodos = allTodos;
    });
  }

  addTodo = (todo: Todo) => {
    this.todoService.addTodo(todo);
  };

  updateTodo = (todo: Todo) => {
    this.todoService.updateTodo(todo);
  };

  deleteTodo = (todo: Todo) => {
    this.todoService.deleteTodo(todo);
  };
}
