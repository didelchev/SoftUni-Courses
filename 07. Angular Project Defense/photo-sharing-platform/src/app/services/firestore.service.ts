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

  getPhotoById(photoId: string): Promise<Photo | null> {
    const photoRef = doc(this.firestore, `Photos/${photoId}`);

    return getDoc(photoRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data() as Photo; // Explicitly cast data to the Photo interface
          return {
            _id: docSnapshot.id, // Include the Firestore document ID
            name: data.name,
            date: data.date,
            author: data.author,
            location: data.location,
            description: data.description,
            device: data.device,
            image: data.image,
          } as Photo;
        } else {
          console.error('Photo not found with ID:', photoId);
          return null;
        }
      })
      .catch((error) => {
        console.error('Error fetching photo:', error);
        return null;
      });
  }
}
