import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { PhotoService } from '../../services/firestore.service';
import { Photo } from '../../models/Photo';
import { FireAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-photo',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css'],
})
export class EditPhotoComponent implements OnInit {
  photo: Photo = { 
    _id: '',
    name: '',
    location: '',
    device: '',
    date: '',
    image: '',
    description: '',
    author: ''
  };
  currentUserEmail: string | null = null;
  photoId: string | null = null;

  constructor(
    private photoService: PhotoService,
    private authService: FireAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    const user = this.authService.getCurrentUser();
    this.currentUserEmail = user?.email || null;
    

     this.photoId = this.route.snapshot.params['photoId']

    console.log(this.photoId);
    

    if (this.photoId) {
      this.photoService.getPhotoById(this.photoId).then((photo) => {
        if (photo) {
          this.photo = photo;
          
        } else {
          console.error('Photo not found!');
        }
      });
    }
  }

  updatePhoto(form: NgForm): void {
    if (form.invalid || !this.photo) return;

    const updatedPhoto: Photo = {
      ...this.photo,
      _id: this.photoId,
      name: form.value.title,
      location: form.value.location,
      device: form.value.device,
      date: form.value.date,
      image: form.value.image,
      description: form.value.description,
      author: this.photo.author, 
    };

    this.photoService.updatePhoto(this.photoId!, updatedPhoto).then(() => {
      console.log('Photo updated successfully');
      this.router.navigate(['/explore']); 
    }).catch((error) => {
      console.error('Error updating photo:', error);
    });
  }
}
