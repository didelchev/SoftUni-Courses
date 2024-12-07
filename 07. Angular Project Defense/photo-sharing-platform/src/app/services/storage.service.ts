import { Injectable } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private storage: Storage) {}

  uploadPhoto(path: string, file: File) {
    const storageRef = ref(this.storage, path);
    return uploadBytes(storageRef, file);
  }

  getPhotoUrl(path: string) {
    const storageRef = ref(this.storage, path);
    return getDownloadURL(storageRef);
  }
}
