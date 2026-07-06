import { Component, inject, output } from '@angular/core';
import { AddGifModalComponent } from '../add-gif-modal/add-gif-modal.component';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-top-bar',
  imports: [AddGifModalComponent, MatButtonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  dialog = inject(MatDialog);
  showSidebar = output<void>();

  onAddGIF() {
    this.dialog.open(AddGifModalComponent);
  }

  onShowSidebar() {
    this.showSidebar.emit()
  }
}
