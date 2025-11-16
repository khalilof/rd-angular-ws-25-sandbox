import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly productName = signal('unknown product');

  constructor() {
    const nameParam = this.route.snapshot.paramMap.get('name');
    this.productName.set(nameParam ?? 'unknown product');
  }
}
