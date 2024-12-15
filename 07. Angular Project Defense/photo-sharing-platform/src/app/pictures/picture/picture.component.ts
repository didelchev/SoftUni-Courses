import { Component, Input, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../models/Photo';
import { PhotoService } from '../../services/firestore.service';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [],
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css',
})
export class PictureComponent implements OnInit {
  photo: Photo | undefined;

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const photoId = this.route.snapshot.params['themeId'];

    this.photoService.getSinglePhoto(photoId).then((fetchedPhoto) => {
      this.photo = fetchedPhoto;
      console.log(this.photo);
    });
  }
}
