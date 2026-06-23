import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddGifService {
  public static async writeGif(gifUrl: string) {
    const gifsString: string = localStorage.getItem('gifs') || "[]";
    const gifs = JSON.parse(gifsString) || [];
    gifs.push(gifUrl); 
    localStorage.setItem('gifs', JSON.stringify(gifs));
  }
}
