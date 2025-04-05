import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private firestore: Firestore) {}

  loadFeaturedPosts(): Observable<Post[]> {
    const postsCollection = collection(this.firestore, 'posts');

    const featuredPostsQuery = query(
      postsCollection,
      limit(4),
      where('isFeatured', '==', true)
    );

    return from(
      getDocs(featuredPostsQuery).then((snapshot) => {
        const posts: Post[] = [];
        snapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() } as Post);
        });
        return posts;
      })
    );
  }

  loadLatestPosts(): Observable<Post[]> {
    const postsCollection = collection(this.firestore, 'posts');

    const latestPostsQuery = query(
      postsCollection,
      orderBy('createdAt', 'desc')
    );

    return from(
      getDocs(latestPostsQuery).then((snapshot) => {
        const posts: Post[] = [];
        snapshot.forEach((doc) => {
          posts.push({ id: doc.id, ...doc.data() } as Post);
        });
        return posts;
      })
    );
  }
}
