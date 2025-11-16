import {computed, Injectable, signal} from '@angular/core';
import {Todo} from './todos/todos';
import {HttpClient} from '@angular/common/http';
import {catchError, debounceTime, filter, flatMap, from, map, of, tap, throttleTime} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedData {
  private todoList = signal<Todo[]>([]);
  public todos = computed(() => this.todoList());

  constructor(private http: HttpClient) {
  }

  getUsers(): void {
    this.http.get('https://dummyjson.com/users')
      .pipe(
        map((it) => {
          // @ts-ignore
          return it['users']
        }),
        debounceTime(3000),
        catchError(er => {
          console.log('oops');
          return er;
        }))
     .subscribe((res) => {
     console.log(res);
    })
  }
  public addNewTodo(newTodo: Todo): void {
    this.todoList.update((it) => [...it, newTodo] )
  }


  public tryObservable(): void {
    const values  = from([1,2,3,4,5]);
    const name  = of('khalil');
    values.pipe(tap(it => console.error(it))).subscribe(it => {console.log(it);});

    name.subscribe(it => {console.log(it);});
  }
}
