import { Component, inject } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-gif-modal',
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: './add-gif-modal.component.html',
  styleUrl: './add-gif-modal.component.css',
})
export class AddGifModalComponent {
  dialog = inject<MatDialog>(MatDialog);

  onClose() {
    this.dialog.closeAll();
  }
}
