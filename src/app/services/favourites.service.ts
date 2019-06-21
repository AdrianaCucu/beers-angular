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

  /**
   * Removes both the beer and the id.
   */
  removeFromFavourites(beer) {
    for (let i = 0; i < this.ids.length; i++) {
      if (beer.id === this.ids[i]) {
        this.ids.splice(i, 1);
      }
    }
    this.items.delete(beer);
  }

  getItems() {
    return this.items;
  }

  /**
   * Resets the beers and the ids and updates the favourites page.
   */
  clearFavourites() {
    this.ids = [];
    this.items = new Set();
    return this.items;
  }
}
