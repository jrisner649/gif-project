import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-gif-modal',
  imports: [FormsModule],
  templateUrl: './add-gif-modal.component.html',
  styleUrl: './add-gif-modal.component.css',
})
export class AddGifModalComponent {
  @ViewChild('addGIFModal') modalRef!: ElementRef;

  linkInputValue: string = '';
}
