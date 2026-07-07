import { Component, inject } from '@angular/core';
import { AddGifService } from '../add-gif-service/add-gif.service';
import { GifComponent } from '../gif/gif.component';

@Component({
  selector: 'app-dashboard',
  imports: [GifComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  addGifService: AddGifService = inject(AddGifService);
}
