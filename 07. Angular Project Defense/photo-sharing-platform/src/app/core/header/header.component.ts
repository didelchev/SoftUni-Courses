import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FireAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  authService = inject(FireAuthService);

  get isLoggedIn(): boolean{
    return this.authService.isLogged
  }
  async logout(){
    await this.authService.logout()
  }
}
