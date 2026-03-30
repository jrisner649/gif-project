import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';


@Component({
  selector: 'app-add-gif-modal',
  imports: [FormsModule, MatDialogContent, MatDialogActions, MatDialogClose],
  templateUrl: './add-gif-modal.component.html',
  styleUrl: './add-gif-modal.component.css',
})
export class AddGifModalComponent {
  
 
}
