import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { HomeComponent } from './pages/home/home.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:category/:id', component: SingleCategoryComponent },
  { path: 'post', component: SinglePostComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'terms-contidions', component: TermsAndConditionsComponent },
];
