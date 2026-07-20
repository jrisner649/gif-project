import { Component, inject, output, signal } from '@angular/core';
import { AddGifModalComponent } from '../add-gif-modal/add-gif-modal.component';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-top-bar',
  imports: [AddGifModalComponent, MatButtonModule, MatIconModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  dialog = inject(MatDialog);
  showSidebar = output<void>();
  sidebarOpen = signal(false);

  onAddGIF() {
    this.dialog.open(AddGifModalComponent);
  }

  onShowSidebar() {
    this.sidebarOpen.update(open => !open);
    this.showSidebar.emit()
  }
}
