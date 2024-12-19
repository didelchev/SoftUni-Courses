import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-photo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-photo.component.html',
  styleUrl: './add-photo.component.css',
})
export class AddPhotoComponent {
  previewImage: string | ArrayBuffer | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      // Read the file
      reader.onload = (e) => {
        if (e.target?.result) {
          this.previewImage = e.target.result; // Only set if not undefined
        }
      };

      reader.readAsDataURL(file); // Convert file to base64
    }
  }

  addPhoto(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }
}
