import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './todos';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  // first arg: status, second arg: search
  transform(todos: Todo[],
            searchTerm: string = '',
            status: 'done' | 'open' | '' = ''): Todo[] {
    if (!todos) return [];

    let result = todos;
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(t => t.text.toLowerCase().includes(term));
    }
    if (status === 'done') {
      result = result.filter(t => t.completed);
    } else if (status === 'open') {
      result = result.filter(t => !t.completed);
    }

    return result;
  }

}
