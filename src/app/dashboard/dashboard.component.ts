import { Component, inject } from '@angular/core';
import { AddGifService } from '../add-gif-service/add-gif.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  addGifService: AddGifService = inject(AddGifService);
}
