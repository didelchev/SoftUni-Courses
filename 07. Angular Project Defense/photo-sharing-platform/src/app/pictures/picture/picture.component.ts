import { Component, Input, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/Photo';
import { PhotoService } from '../../services/firestore.service';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
})
export class PictureComponent implements OnInit {
  photo: Photo | any;
  isLoading: boolean = false;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const photoId = this.route.snapshot.params['photoId'];
    this.isLoading = true;

    this.photoService.getPhotoById(photoId).then((photo) => {
      this.photo = photo;
      console.log(photo);
      this.isLoading = false;
    });
  }
}
