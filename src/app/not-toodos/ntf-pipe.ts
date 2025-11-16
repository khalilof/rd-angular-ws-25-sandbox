import { Pipe, PipeTransform } from '@angular/core';
import {NotTodo} from './not-toodos';

@Pipe({
  name: 'nTF'
})
export class NTFPipe implements PipeTransform {

  transform(todos: NotTodo[], searchTerm: string = ''): NotTodo[] {
    return todos.filter(it => it.text.includes(searchTerm));
  }

}
