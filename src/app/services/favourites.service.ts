import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  items = new Set();
  ids = [];

  constructor() {}

  /**
   * Updates the array of ids and the set of favourites.
   * (Needed ids array to solve duplicates issue.)
   *
   * @param beer
   */
  addToFavourites(beer) {
    let exists = false;
    for (let i = 0; i < this.ids.length && !exists; i++) {
      if (beer.id === this.ids[i]) {
        exists = true;
      }
    }

    if (!exists) {
      this.ids.push(beer.id);
      this.items.add(beer);
    }

    console.log(this.ids);
    console.log(this.items);
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
