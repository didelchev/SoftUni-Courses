import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  // Register User
  async registerUser(userData: any) {
    try {
      // Step 1: Create User in Firebase Authentication
      const result = await this.afAuth.createUserWithEmailAndPassword(
        userData.email,
        userData.password
      );

      // Step 2: Store Additional User Details in Firestore
      const userRef = this.firestore.collection('users').doc(result.user?.uid);
      await userRef.set({
        firstName: userData.firstname,
        lastName: userData.lastname,
        email: userData.email,
        username: userData.username,
        uid: result.user?.uid, // Firebase-generated UID
      });

      return result;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }
}
