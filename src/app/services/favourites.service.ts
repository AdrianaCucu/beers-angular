import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  items = new Set();

  constructor() {}

  addToFavourites(beer) {
    this.items.add(beer);
  }

  removeFromFavourites(beer) {
    this.items.delete(beer);
  }

  getItems() {
    return this.items;
  }

  clearFavourites() {
    this.items = new Set();
    return this.items;
  }
}
