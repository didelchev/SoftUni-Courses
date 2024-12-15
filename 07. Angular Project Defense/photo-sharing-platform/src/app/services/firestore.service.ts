import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  Firestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private firestore: Firestore) {}

  getPhotos() {
    const photosRef = collection(this.firestore, 'photos'); // Reference to the 'photos' collection
    return getDocs(photosRef); // Fetch all documents in the collection
  }

  getSinglePhoto(photoId: string): Promise<Photo | undefined> {
    const photoRef = doc(this.firestore, 'photos', photoId); // Reference to the specific document

    return getDoc(photoRef).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.data() as Photo; // Return the photo data if it exists
      } else {
        console.log('No such document!');
        return undefined; // If the document doesn't exist
      }
    });
  }
}
