import { Component, Input, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Photo } from '../../models/Photo';
import { PhotoService } from '../../services/firestore.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { FireAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [LoaderComponent, RouterLink],
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
    private authService: FireAuthService,
    private router: Router
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

  deletePhoto(photoId: string) : void{
    const confirm = window.confirm('Are you sure you want to delete this photo ?')
    if(confirm){
      this.photoService.deletePhoto(photoId)
    .then(() => {
      console.log('Photo deleted succesfully');
      this.router.navigate(['/explore'])
    })
    .catch((error) => {
      console.log('Error deleting photo:', error);
      
    })
    }
    
  }
}
