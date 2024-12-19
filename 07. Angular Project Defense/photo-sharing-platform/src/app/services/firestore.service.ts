import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  Firestore,
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Photo } from '../models/Photo';
import { FireAuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private firestore: Firestore, private authService: FireAuthService) {}

  getPhotos() {
    const photosRef = collection(this.firestore, 'photos'); 
    return getDocs(photosRef); 
  }

  getPhotoById(photoId: string): Promise<Photo | null> {
    const photoRef = doc(this.firestore, `Photos/${photoId}`);

    return getDoc(photoRef)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const data = docSnapshot.data() as Photo; 
          return {
            _id: docSnapshot.id, 
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

  updatePhoto(photoId: string, updatedPhoto: Photo): Promise<void> {
    const photoRef = doc(this.firestore, `Photos/${photoId}`);

    const { _id, ...updateData } = updatedPhoto; 

    return updateDoc(photoRef, updateData)  
      .then(() => {
        console.log('Photo updated successfully');
      })
      .catch((error) => {
        console.error('Error updating photo:', error);
      });
  }

  deletePhoto(photoId: string): Promise<void>{
    const photoDoc = doc(this.firestore, `Photos/${photoId}`)
    return deleteDoc(photoDoc)
    
  }

  async getRandomPhotos(count: number): Promise<Photo[]> {
    const photosRef = collection(this.firestore, 'Photos');
    const snapshot = await getDocs(photosRef); 
    const allPhotos = snapshot.docs.map((doc) => ({
      _id: doc.id,
      ...doc.data(),
    })) as Photo[];

    const shuffledPhotos = allPhotos.sort(() => 0.5 - Math.random());
    return shuffledPhotos.slice(0, count);
  }
    

  addComment(photoId: string, comment: { userId: string; username: string; content: string; timestamp: Date }): Promise<void> {
    const photoRef = doc(this.firestore, `Photos/${photoId}`);
    return updateDoc(photoRef, {
      comments: arrayUnion(comment)
    });
  }
  }

  


