import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGifModalComponent } from '../add-gif-modal/add-gif-modal.component';

@Component({
  selector: 'app-top-bar',
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {
  dialog = inject<MatDialog>(MatDialog);

  onClick() {
    this.dialog.open(AddGifModalComponent);
  }

}
