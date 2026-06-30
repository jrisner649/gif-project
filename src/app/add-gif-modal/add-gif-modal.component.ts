import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AddGifService } from '../add-gif-service/add-gif.service';

@Component({
  selector: 'app-add-gif-modal',
  imports: [FormsModule, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatDialogTitle, MatFormFieldModule, MatInputModule],
  templateUrl: './add-gif-modal.component.html',
  styleUrl: './add-gif-modal.component.scss',
})
export class AddGifModalComponent {
  gifService = inject(AddGifService);
  userInput: string = '';
  isImageValid: boolean = true;
  imageUrl: string = '';

  updateImageUrl() {
    this.isImageValid = true;
    this.imageUrl = this.userInput? this.userInput + '.gif' : '';
  }

  onImageError() {
    this.isImageValid = false;
  }

  onAddGif() {
    try {
      this.gifService.addGif(this.imageUrl);
    } catch (error) {
      console.error('Failed to save GIF:', error);
    }
  }
}
