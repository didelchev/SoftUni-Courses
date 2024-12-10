import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPhotoComponent } from './pictures/add-photo/add-photo.component';
import { CatalogComponent } from './pictures/explore/explore.component';
import { PictureComponent } from './pictures/picture/picture.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // User routing
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'explore',
    children: [
      { path: '', component: CatalogComponent },
      { path: 'details', component: PictureComponent },
    ],
  },

  { path: 'add-photo', component: AddPhotoComponent },
];
