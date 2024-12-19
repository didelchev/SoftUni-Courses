import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DOMAINS } from '../../constants';
import { FireAuthService } from '../../services/auth.service';
import { EmailDirective } from '../../directives/email.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  domains = DOMAINS;
  router = inject(Router);
  authService = inject(FireAuthService);

  async login(form: NgForm) {
    
      const { email , password } =form.value;

      try {
        await this.authService.loginWithEmailAndPassword(email,password)
        this.router.navigate(['/'])
      } catch (error) {
        console.log(error);
        
      }
    
  }
}