import {Component, OnDestroy, OnInit} from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  fromEvent,
  interval,
  map,
  ReplaySubject,
  Subject,
  Subscription, tap,
  throttleTime
} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxjs-play',
  imports: [],
  templateUrl: './rxjs-play.html',
  styleUrl: './rxjs-play.scss',
})
export class RxjsPlay implements OnInit, OnDestroy {

  allSubscriptions: Subscription = new Subscription();

  search = new Subject<string>();
  replayAbleSearch = new ReplaySubject<string>();

  coolSubject = new BehaviorSubject<string>('init');

  uncoolSubject = new Subject<string>();

  searchSignal = toSignal(this.search);
  searchSignalObservable = toObservable(this.searchSignal);


  ngOnInit() {
    this.uncoolSubject.pipe(tap(cool => {
      console.warn(cool);
    })).subscribe();
    this.uncoolSubject.next('value new');


    this.uncoolSubject.subscribe((value) => {
      console.log(value);
    });

    this.allSubscriptions.add(
      interval(300).subscribe(
        console.log
      )
    );
    this.search.subscribe((it) => console.log(it));



    fromEvent<MouseEvent>(document, 'mousemove').pipe(throttleTime(300),
      map(it => {
        return {
          x: it.clientX,
          y: it.clientY
        }
        })
    ).subscribe(it => console.log(it));
  }

  protected handleInput($event: Event) {
    this.search.next(($event.target as HTMLInputElement).value);
  }

  ngOnDestroy() {
    this.allSubscriptions.unsubscribe();
  }
}
