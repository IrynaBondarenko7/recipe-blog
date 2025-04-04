import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyC24NpK1t0FoBWeKAtyLsY9wbCngf1YWo4',
  authDomain: 'ang-blog-1c106.firebaseapp.com',
  projectId: 'ang-blog-1c106',
  storageBucket: 'ang-blog-1c106.firebasestorage.app',
  messagingSenderId: '909239884303',
  appId: '1:909239884303:web:eb9c853791d9fe2de0617a',
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
