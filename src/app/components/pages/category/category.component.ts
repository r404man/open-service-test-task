import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  categoryId: number | null = null;
  products$!: Observable<Product[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductService
  ) {
    this.activatedRoute.params.subscribe((data) => {
      if (data['id']) {
        this.categoryId = Number(data['id']);
      }
      this.getProducts();
    });
  }

  getProducts(): void {
    this.products$ = this.productsService.getProducts(this.categoryId);
  }
}
