import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class CatalogComponent {}
