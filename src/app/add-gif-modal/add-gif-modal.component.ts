import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-gif-modal',
  imports: [FormsModule, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './add-gif-modal.component.html',
  styleUrl: './add-gif-modal.component.scss',
})
export class AddGifModalComponent {}
