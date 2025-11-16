import { Component } from '@angular/core';
import {MatCard, MatCardHeader} from "@angular/material/card";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-hello-material',
  imports: [
    MatCard,
    MatCardHeader,
    MatProgressSpinner,
    MatSlideToggle
  ],
  templateUrl: './hello-material.html',
  styleUrl: './hello-material.scss',
})
export class HelloMaterial {

}
