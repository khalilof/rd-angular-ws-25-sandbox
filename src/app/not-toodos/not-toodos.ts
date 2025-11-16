import { Component } from '@angular/core';
import {FormBuilder, FormsModule} from '@angular/forms';
import {NTFPipe} from './ntf-pipe';
import {JsonPipe, NgStyle} from '@angular/common';
import {SharedData} from '../shared-data';

export interface NotTodo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-not-toodos',
  imports: [
    FormsModule,
    NTFPipe,
    NgStyle,
    JsonPipe
  ],
  templateUrl: './not-toodos.html',
  styleUrl: './not-toodos.scss',
})
export class NotToodos {
   currentTodoText = '';
   notTodos: NotTodo[] = [];

   constructor(public state: SharedData) {
   }

   addNewTodo(newTodo: string): void {
     this.state.addNewTodo({
       text: newTodo, completed: false
     })
     this.currentTodoText = '';
   }

  protected setTodoAsCompleted(notT: NotTodo) {
    this.notTodos = this.notTodos.map(it => ({
      ...it,
      completed: it.text === notT.text
    }))
  }
}
