import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private firestore: Firestore) {}

  loadData(): Observable<Category[]> {
    const categoriesCollection = collection(this.firestore, 'categories');
    return collectionData(categoriesCollection, {
      idField: 'id',
    }) as Observable<Category[]>;
  }
}
