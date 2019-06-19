import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  items = [];

  constructor() {}

  addToFavourites(beer) {
    this.items.push(beer);
  }

  getItems() {
    return this.items;
  }

  clearFavourites() {
    this.items = [];
    return this.items;
  }
}
