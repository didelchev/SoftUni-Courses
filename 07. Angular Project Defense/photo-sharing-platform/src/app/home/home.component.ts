import { Component } from '@angular/core';
import { FooterComponent } from '../core/footer/footer.component';
import { HeaderComponent } from '../core/header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
