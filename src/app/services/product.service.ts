import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Product #1',
    category: 1,
    price: 100,
  },
  {
    id: 2,
    name: 'Product #2',
    category: 1,
    price: 150,
  },
  {
    id: 3,
    name: 'Product #3',
    category: 2,
    price: 600,
  },
  {
    id: 4,
    name: 'Product #4',
    category: 2,
    price: 1000,
  },
];

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(categoryId: number | null): Observable<Product[]> {
    if (!categoryId) return of(PRODUCTS);
    const products = PRODUCTS.filter(
      (product) => product.category === categoryId
    );
    return of(products);
  }
}
