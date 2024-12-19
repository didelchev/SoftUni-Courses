import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, sendPasswordResetEmail, 
  signInWithEmailAndPassword, updateProfile, User, UserCredential } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {
  private user: User | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private auth: Auth, private firestore: Firestore) {
    this.listenToAuthStateChanges();
  }

  private listenToAuthStateChanges(): void {
    authState(this.auth).subscribe((user: User | null) => {
      this.user = user;
    });
  }

  async signUpWithEmailAndPassword(
    email: string, 
    password: string,
    firstName: string, 
    lastName: string,
    username: string
  ): Promise<UserCredential> {
    try {
      const cred = await createUserWithEmailAndPassword(this.auth, email, password);
      await updateProfile(cred.user, {
        displayName: `${firstName} ${lastName}`,
      });

      const userRef = doc(this.firestore, `users/${cred.user.uid}`);
      await setDoc(userRef, {
        firstName,
        lastName,
        username,
        email,
        createdAt: new Date(),
      });

      return cred;
    } catch (error) {
      console.error('Sign up failed:', error);
      throw error;
    }
  }

  async loginWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  getCurrentUser(): User | null {
    return this.user;
  }

}