import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DOMAINS } from '../../constants';
import { emailValidator } from '../../utils/email.validator';
import { matchPasswordsValidator } from '../../utils/match-password.validator';
import { FireAuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  router = inject(Router)
  authService = inject(FireAuthService);

  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, emailValidator(DOMAINS)]),
    passGroup: new FormGroup(
      {
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),
        rePassword: new FormControl('', [Validators.required]),
      },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')],
      }
    ),
  });

  isFiledTextMissing(controlName: string) {
    return (
      this.form.get(controlName)?.touched &&
      this.form.get(controlName)?.errors?.['required']
    );
  }

  get isNotMinLength() {
    return (
      this.form.get('firstName')?.touched &&
      this.form.get('firstName')?.errors?.['minlength']
    );
  }

  get isEmailNotValid() {
    return (
      this.form.get('email')?.touched &&
      this.form.get('email')?.errors?.['emailValidator']
    );
  }

  get passGroup() {
    return this.form.get('passGroup');
  }

  register() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const password = this.form.get('passGroup.password')?.value; // Access nested control
  
      const userDetails = {
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        username: this.form.value.username,
      };
  
      if (email && password) {
        this.authService
          .signUpWithEmailAndPassword(email, password, userDetails.firstName!, userDetails.lastName!, userDetails.username!)
          .then((userCredential) => {
            console.log('Registration successful:', userCredential);
            this.router.navigate(['/login']);
          })
          .catch((error) => {
            console.error('Registration failed:', error);
          });
      }
    } else {
      this.form.markAllAsTouched(); // Show validation errors
    }
  }
  
  
  
}




// this.authService
//           .signUpWithEmailAndPassword(email, password)
//           .then((userCredential) => {
//             const userId = userCredential.user.uid; // Get the user ID from the registered user
            
//             // Save additional user details to Firestore
//             this.authService
//               .saveUserDetails(userId, userDetails)
//               .then(() => {
//                 console.log('User details saved successfully.');
//                 this.router.navigate(['/login']); // Redirect after saving details
//               })
//               .catch((error) => {
//                 console.error('Failed to save user details:', error);
//               });
//           })
//           .catch((error) => {
//             console.error('Registration failed:', error);
//           });
//       }