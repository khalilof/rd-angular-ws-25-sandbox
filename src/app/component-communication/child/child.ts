import {Component, input, OnInit, output} from '@angular/core';
import {CurrencyPipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [
    CurrencyPipe,
    UpperCasePipe
  ],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child implements OnInit {


  messageFromDad = input.required({
    alias: 'message-from-dad'
  });

  tellDadSomething = output<string>({});

  ngOnInit() {
    this.tellDadSomething.emit('Hi Dad')
  }
}
