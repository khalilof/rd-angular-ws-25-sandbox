import {Component, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TodoFilterPipe} from './todo-filter-pipe';
import {NgStyle} from '@angular/common';
import {SharedData} from '../shared-data';
export interface Todo {
  text: string;
  completed: boolean;
}
@Component({
  selector: 'app-todos',
  imports: [
    FormsModule,
    TodoFilterPipe,
    NgStyle
  ],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  currentTodoInput: string = '';
  todos: WritableSignal<Todo[]> = signal([
    {
      text: 'dummy',
      completed: false
    },
    {
      text: 'important',
      completed: true
    },

  ]);
   statusFilter: 'done' | 'open' | '' = '';

  constructor(public state: SharedData) {
  }
  protected addTodo(text: string) {
    this.state.addNewTodo({
      completed: false,
      text
    })
    this.currentTodoInput = '';
  };

  protected setTodoAsCompleted(todo: Todo) {
    this.todos.update((allTodos) =>
      allTodos.map((it) => it.text === todo.text ? {...it, completed: true } : it),
    );
  }
}
