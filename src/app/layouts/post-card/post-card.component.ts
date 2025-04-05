import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  @Input() postData!: Post;
}
