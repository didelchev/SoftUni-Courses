import { Component, Input, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/Photo';
import { PhotoService } from '../../services/firestore.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { FireAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
})
export class PictureComponent implements OnInit {
  photo: Photo | null = null;
  isLoading: boolean = false;
  currentUserEmail: string | null = null;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute,
    private authService: FireAuthService
  ) {}


  ngOnInit(): void {

    const user = this.authService.getCurrentUser();
    this.currentUserEmail = user?.email || null;



    const photoId = this.route.snapshot.params['photoId'];
    this.isLoading = true;

    this.photoService.getPhotoById(photoId).then((photo) => {
      this.photo = photo;
      console.log(photo);
      this.isLoading = false;
    });
  }
}
