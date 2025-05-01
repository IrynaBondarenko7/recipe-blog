import { HeaderComponent } from './layouts/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from './layouts/footer/footer.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    PostCardComponent,
    SubscriptionFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe-blog';
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }
}
