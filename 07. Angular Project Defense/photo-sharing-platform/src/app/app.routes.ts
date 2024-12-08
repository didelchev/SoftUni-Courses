import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AddPhotoComponent } from './pictures/add-photo/add-photo.component';
import { CatalogComponent } from './pictures/explore/explore.component';

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
  { path: 'explore', component: CatalogComponent },
  { path: 'add-photo', component: AddPhotoComponent}
];
