import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: string[], term: string): string[] {
    console.log(items);
    return items.filter(item => item.includes(term));
  }

}
