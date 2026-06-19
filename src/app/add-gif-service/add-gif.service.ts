import { Injectable } from '@angular/core';
import { 
  fileOpen,
  fileSave,
  supported,
  FirstFileSaveOptions
} from 'browser-fs-access';

@Injectable({
  providedIn: 'root',
})
export class AddGifService {
  public static async writeGif(gifUrl: string) {
    if (!supported) {
      throw new Error('File Handling API is not supported!');
    }

    try {
      // Fetch the GIF from the provided URL
      const params = new URLSearchParams({ gifUrl: gifUrl });
      const response = await fetch(`/gif?${params.toString()}`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch GIF: ${response.statusText}`);
      }

      const blob = await response.blob();

      // Extract filename from URL or use default
      const fileName = 'downloaded.gif';

      // Save the GIF file
      const options: FirstFileSaveOptions = {
        fileName,
        extensions: ['.gif'],
        startIn: 'downloads',
        id: 'gifs',
        excludeAcceptAllOption: false,
      };

      await fileSave(blob, options);
      console.log(`GIF saved successfully: ${fileName}`);
    } catch (error) {
      console.error('Error saving GIF:', error);
      throw error;
    }
  }
}
