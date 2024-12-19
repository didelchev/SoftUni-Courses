import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../models/Photo';
import { PhotoService } from '../../services/firestore.service';
import { FireAuthService } from '../../services/auth.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-picture',
  standalone: true,
  imports: [LoaderComponent, RouterLink, FormsModule],
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
})
export class PictureComponent implements OnInit {
  photo: Photo | null = null;
  isLoading: boolean = false;
  currentUserEmail: string | null = null;
  newComment: string = '';  

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

  deletePhoto(photoId: string): void {
    const confirm = window.confirm('Are you sure you want to delete this photo?');
    if (confirm) {
      this.photoService.deletePhoto(photoId)
        .then(() => {
          console.log('Photo deleted successfully');
          this.router.navigate(['/explore']);
        })
        .catch((error) => {
          console.log('Error deleting photo:', error);
        });
    }
  }

  // addComment(): void {
  //   if (this.newComment.trim()) {
  //     const comment = {
  //       userId: this.currentUserEmail || 'anonymous', 
  //       username: this.currentUserEmail?.split('@')[0] || 'Anonymous',
  //       content: this.newComment,
  //       timestamp: new Date()
  //     };
  
  //     if (this.photo && this.photo._id) {
  //       this.photoService.addComment(this.photo._id, comment)
  //         .then(() => {
  //           this.newComment = '';  
  //           this.loadPhoto();  
  //         })
  //         .catch((error) => {
  //           console.error('Error adding comment:', error);
  //         });
  //     }
  //   }
  // }
  

  // loadPhoto(): void {
  //   const photoId = this.route.snapshot.params['photoId'];
  //   this.photoService.getPhotoById(photoId).then((photo) => {
  //     this.photo = photo;
  //   }).catch((error) => {
  //     console.error('Error loading photo:', error);
  //   });
  // }
}
