import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
  doc,
  getDoc,
  updateDoc,
  increment,
} from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
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

  loadCategoryPosts(categoryId: string): Observable<Post[]> {
    const postsCollection = collection(this.firestore, 'posts');

    const featuredPostsQuery = query(
      postsCollection,
      where('category.categoryId', '==', categoryId)
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

  loadOnePost(postId: string): Observable<Post | null> {
    const postDocRef = doc(this.firestore, 'posts', postId);

    return from(
      getDoc(postDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          return { id: docSnap.id, ...docSnap.data() } as Post;
        } else {
          return null;
        }
      })
    );
  }

  loadSimilar(categoryId: string, postId: string): Observable<Post[]> {
    const postsCollection = collection(this.firestore, 'posts');

    const similarPostsQuery = query(
      postsCollection,
      where('category.categoryId', '==', categoryId),
      limit(4)
    );

    return from(
      getDocs(similarPostsQuery).then((snapshot) => {
        const posts: Post[] = [];
        snapshot.forEach((doc) => {
          if (doc.id !== postId) {
            posts.push({ id: doc.id, ...doc.data() } as Post);
          }
        });

        return posts;
      })
    );
  }

  countViews(postId: string): Observable<void> {
    const postRef = doc(this.firestore, 'posts', postId);

    return from(
      updateDoc(postRef, {
        views: increment(1),
      })
    );
  }
}
