import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private firestore: Firestore) {}

  loadData(): Observable<Category[]> {
    const categoriesCollection = query(
      collection(this.firestore, 'categories'),
      where('isDeleted', '==', false)
    );
    return collectionData(categoriesCollection, {
      idField: 'id',
    }) as Observable<Category[]>;
  }
}
