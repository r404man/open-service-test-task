import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { Observable } from 'rxjs';
import { Category } from './interfaces/category.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  categories$!: Observable<Category[]>;
  title = 'open-service-test-task';

  constructor(private categoryService: CategoryService) {}

  getCategories(): void {
    this.categories$ = this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
