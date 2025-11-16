import {Component, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgStyle} from '@angular/common';
import {RouterLink} from '@angular/router';
import {SearchPipe} from './search-pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule,
    NgStyle,
    RouterLink,
    SearchPipe,
    MatProgressSpinnerModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.scss',

})
export class Products implements OnInit {
  products = signal<string[]>(['iphone', 'samsung', 'nokia', 'sony'])
  isPass = false;
  textHolder = 'hello';
  protected searchTerm: string = '';

  ngOnInit() {
  }

  protected addNewProduct() {
    console.log(new SearchPipe().transform(this.products(), this.searchTerm));
  }
}
