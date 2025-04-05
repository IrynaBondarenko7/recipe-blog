import { Component, inject } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentsListComponent } from '../../comments/comments-list/comments-list.component';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [
    PostCardComponent,
    CommentFormComponent,
    CommentsListComponent,
    CommonModule,
  ],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent {
  private route = inject(ActivatedRoute);
  private postService = inject(PostsService);

  postData!: Post | null;
  similarPosts: Post[] = [];

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.postService.loadOnePost(param['id']).subscribe((post) => {
        this.postData = post;
        this.loadSimilarPosts(
          this.postData?.category.categoryId!,
          this.postData?.id!
        );
      });
    });
  }

  loadSimilarPosts(categoryId: string, postId: string) {
    this.postService.loadSimilar(categoryId, postId).subscribe((posts) => {
      this.similarPosts = posts;
    });
  }
}
