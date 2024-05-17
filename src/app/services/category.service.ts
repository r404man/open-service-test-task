import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../interfaces/category.interface';

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Category #1',
  },
  {
    id: 2,
    name: 'Category #2',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
}
