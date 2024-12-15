import { Component, inject, OnInit } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';
import { Photo } from '../../models/Photo';
import { PhotoService } from '../../services/firestore.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class CatalogComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private firestore: Firestore) {}
  ngOnInit(): void {
    this.fetchPhotos();
  }

  fetchPhotos() {
    const photosRef = collection(this.firestore, 'Photos');
    getDocs(photosRef)
      .then((snapshot) => {
        this.photos = snapshot.docs.map(
          (doc) => ({ _id: doc.id, ...doc.data() } as Photo)
        );
        console.log(this.photos);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }
}
