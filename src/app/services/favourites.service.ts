import { Injectable, OnInit } from '@angular/core';
import { isDataSource } from '@angular/cdk/collections';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  items = localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : [];
  ids = localStorage.getItem('favouritesIds') ? JSON.parse(localStorage.getItem('favouritesIds')) : [];

  constructor() {}

  /**
   * Updates the array of ids and the set of favourites.
   * (Needed ids array to solve duplicates issue.)
   */
  addToFavourites(beer) {
    let exists = false;

    if (this.ids.length) {
      for (let i = 0; i < this.ids.length && !exists; i++) {
        if (beer.id === this.ids[i]) {
          exists = true;
        }
      }
    }

    if (!exists) {
      this.ids.push(beer.id);
      this.items.push(beer);
    }

    // console.log(this.ids);
    // console.log(this.items);

    localStorage.setItem('favourites', JSON.stringify(this.items));
    localStorage.setItem('favouritesIds', JSON.stringify(this.ids));
    // console.log('storage');
    // console.log(localStorage.getItem('favourites'));
  }

  /**
   * Removes both the beer and the id.
   */
  removeFromFavourites(beer) {
    for (let i = 0; i < this.ids.length; i++) {
      if (beer.id === this.ids[i]) {
        this.ids.splice(i, 1);
        this.items.splice(i, 1);
      }
    }

    console.log(this.items);

    localStorage.setItem('favourites', JSON.stringify(this.items));
    localStorage.setItem('favouritesIds', JSON.stringify(this.ids));
    // console.log('storage');
    // console.log(localStorage.getItem('favourites'));
  }

  getItems() {
    console.log(localStorage.getItem('favourites'));

    return this.items;
  }

  /**
   * Resets the beers and the ids and updates the favourites page.
   */
  clearFavourites() {
    this.ids = [];
    this.items = [];

    localStorage.setItem('favourites', JSON.stringify(this.items));
    localStorage.setItem('favouritesIds', JSON.stringify(this.ids));
  }
}
