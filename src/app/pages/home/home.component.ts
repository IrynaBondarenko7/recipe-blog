import { Component, inject } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private postService = inject(PostsService);

  featuredPosts: Post[] = [];
  latestPosts: Post[] = [];

  ngOnInit(): void {
    this.postService.loadFeaturedPosts().subscribe((posts) => {
      this.featuredPosts = posts;
    });

    this.postService.loadLatestPosts().subscribe((posts) => {
      console.log(posts);
      this.latestPosts = posts;
    });
  }
}
