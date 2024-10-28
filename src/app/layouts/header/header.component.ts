import { Component } from '@angular/core';
import { CategoryNavbarComponent } from '../category-navbar/category-navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CategoryNavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
