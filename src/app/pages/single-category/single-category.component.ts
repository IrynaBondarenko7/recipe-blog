import { Component, inject } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css',
})
export class SingleCategoryComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostsService);

  postsArray: Post[] = [];
  categoryName: string = '';

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.categoryName = param['category'];
      this.postService.loadCategoryPosts(param['id']).subscribe((posts) => {
        this.postsArray = posts;
      });
    });
  }
}
