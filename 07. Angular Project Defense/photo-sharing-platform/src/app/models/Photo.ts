import { DocumentData, DocumentSnapshot } from '@angular/fire/compat/firestore';

export interface Photo {
  _id: any;
  name: String;
  date: String;
  author: String;
  location: String;
  description?: String;
  device: String;
  image: String;
}
