import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private firestore: AngularFirestore) {}

  getPhotos() {
    return this.firestore.collection('photos').valueChanges();
  }

  uploadPhoto(photoData: any) {
    return this.firestore.collection('photos').add(photoData);
  }
}
