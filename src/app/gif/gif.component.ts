import { Component, inject, input } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { AddGifService } from '../add-gif-service/add-gif.service';

@Component({
  selector: 'app-gif',
  imports: [MatIconModule],
  templateUrl: './gif.component.html',
  styleUrl: './gif.component.scss',
})
export class GifComponent {
  gif = input.required<string>();

  private addGifService: AddGifService = inject(AddGifService);

  deleteGif() {
    this.addGifService.removeGif(this.gif());
  }
}
