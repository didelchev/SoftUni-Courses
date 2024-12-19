import { DocumentData, DocumentSnapshot } from '@angular/fire/compat/firestore';

export interface Photo {
  _id?: any;
  name: String;
  date: string;
  author?: String;
  location: String;
  description?: String;
  device: String;
  image: String;
  comments?: Array<{
    userId: string; 
    username: string; 
    content: string; 
    timestamp: Date; 
  }>;
}
