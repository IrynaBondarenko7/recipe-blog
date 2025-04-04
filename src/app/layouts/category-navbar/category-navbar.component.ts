import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css',
})
export class CategoryNavbarComponent {
  private categoryService = inject(CategoriesService);

  categoryArray: Category[] = [];

  ngOnInit(): void {
    this.categoryService.loadData().subscribe((categories) => {
      this.categoryArray = categories;
    });
  }
}
