import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  items = localStorage.getItem('favourites')
    ? JSON.parse(localStorage.getItem('favourites'))
    : [];
  ids = localStorage.getItem('favouritesIds')
    ? JSON.parse(localStorage.getItem('favouritesIds'))
    : [];

  constructor() {}

  // Checks if the specified beer was already added to favourites.
  isInFavourites(beer) {
    let exists = false;

    if (this.ids.length) {
      for (let i = 0; i < this.ids.length && !exists; i++) {
        if (beer.id === this.ids[i]) {
          exists = true;
        }
      }
    }

    return exists;
  }

  /**
   * Updates the favourites based on whether the beer is already a favourite or not.
   *
   * @param beer - the selected beer
   */
  updateFavourites(beer) {
    this.isInFavourites(beer)
      ? this.removeFromFavourites(beer)
      : this.addToFavourites(beer);
  }

  /**
   * Updates the array of ids and the set of favourites.
   * (Needed ids array to solve duplicates issue.)
   */
  addToFavourites(beer) {
    const exists = this.isInFavourites(beer);

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

    // console.log(this.items);

    localStorage.setItem('favourites', JSON.stringify(this.items));
    localStorage.setItem('favouritesIds', JSON.stringify(this.ids));

    // console.log('storage');
    // console.log(localStorage.getItem('favourites'));
  }

  getItems() {
    // console.log(localStorage.getItem('favourites'));

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
