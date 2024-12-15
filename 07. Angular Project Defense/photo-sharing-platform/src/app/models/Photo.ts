import { DocumentData, DocumentSnapshot } from '@angular/fire/compat/firestore';

export interface Photo {
  _id: any;
  name: String;
  date: String;
  owner: String;
  location: String;
  device: String;
  image: String;
}
