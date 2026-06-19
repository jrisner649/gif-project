import { Injectable } from '@angular/core';
import { 
  fileOpen,
  supported
} from 'browser-fs-access';

@Injectable({
  providedIn: 'root',
})
export class AddGifService {
  public static async writeGif() {
    if (supported) {
      console.log('File Handling API is supported!');
    } else {
      console.error('File Handling API is not supported!');
    }

    const file = await fileOpen();
    console.log(file)
    const text = await file.text()
    console.log(text)
  }
}
