import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../core/footer/footer.component';
import { HeaderComponent } from '../core/header/header.component';
import { RouterLink } from '@angular/router';
import { Photo } from '../models/Photo';
import { PhotoService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  randomPhotos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.loadRandomPhotos();
  }

  async loadRandomPhotos() {
    try {
      this.randomPhotos = await this.photoService.getRandomPhotos(3); // Fetch 3 random photos
    } catch (error) {
      console.error('Error fetching random photos:', error);
    }
  }
}