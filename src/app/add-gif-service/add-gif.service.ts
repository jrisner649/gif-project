import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddGifService {
  public gifs = signal<Array<string>>([]);

  constructor() {
    const gifsString = localStorage.getItem('gifs') || "[]";
    const initialGifs = JSON.parse(gifsString) || [];
    this.gifs.set(initialGifs);
  }

  public addGif(gifUrl: string) {
    const currentGifs = this.gifs() || [];
    const updated = [...currentGifs, gifUrl];
    this.gifs.set(updated);
    localStorage.setItem('gifs', JSON.stringify(updated));
  }

  public removeGif(gifUrl: string) {
    const updated = this.gifs().filter((gif) => gif !== gifUrl);
    this.gifs.set(updated);
    localStorage.setItem('gifs', JSON.stringify(updated));
  }
}
