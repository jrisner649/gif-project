import { Component, inject } from '@angular/core';
import { AddGifModalComponent } from '../add-gif-modal/add-gif-modal.component';
import * as bootstrap from 'bootstrap';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-top-bar',
  imports: [AddGifModalComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  dialog = inject(MatDialog);

  onAddGIF() {
    this.dialog.open(AddGifModalComponent);
  }
}
