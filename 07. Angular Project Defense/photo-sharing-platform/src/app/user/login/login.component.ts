import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DOMAINS } from '../../constants';
import { EmailDirective } from '../../directives/email.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  domains = DOMAINS;

  login(form: NgForm) {
    if (form.invalid) {
      console.error('Form is invalid');
      return;
    }
  }
}
