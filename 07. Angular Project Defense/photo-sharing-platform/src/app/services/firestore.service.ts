import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from '@angular/fire/firestore';
import { Photo } from '../models/Photo';
import { FireAuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private firestore: Firestore, private authService: FireAuthService) {}

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

  addPhoto(photoData: Omit<Photo, '_id'>): Promise<void> {
    const photoRef = collection(this.firestore, 'Photos');

    const user = this.authService.getCurrentUser();

    if(!user){
      return Promise.reject('User not authenticated')
    }

    const photoWithAuthor = {
      ...photoData, author: user.email
    }

    return addDoc(photoRef, photoWithAuthor)
      .then(() => {
        console.log('Photo added successfully');
      })
      .catch((error) => {
        console.error('Error adding photo:', error);
        throw error; // Re-throw the error to allow further handling in the caller
      });
  }

  // updatePhoto()


  deletePhoto(photoId: string): Promise<void>{
    const photoDoc = doc(this.firestore, `Photos/${photoId}`)
    return deleteDoc(photoDoc)
    
  }
    
  }

  


