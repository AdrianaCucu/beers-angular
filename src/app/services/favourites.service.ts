import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  items = localStorage.getItem('favourites')
    ? JSON.parse(localStorage.getItem('favourites'))
    : [];

  constructor() {}

  // Checks if the specified beer was already added to favourites.
  isInFavourites(beer) {
    let exists = false;

    if (this.items.length) {
      for (let i = 0; i < this.items.length && !exists; i++) {
        if (beer.id === this.items[i].id) {
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

  addToFavourites(beer) {
    const exists = this.isInFavourites(beer);

    if (!exists) {
      this.items.push(beer);
    }

    // console.log(this.items);

    localStorage.setItem('favourites', JSON.stringify(this.items));

    // console.log('storage');
    // console.log(localStorage.getItem('favourites'));
  }

  /**
   * Removes both the beer.
   */
  removeFromFavourites(beer) {
    for (let i = 0; i < this.items.length; i++) {
      if (beer.id === this.items[i].id) {
        this.items.splice(i, 1);
      }
    }

    // console.log(this.items);

    localStorage.setItem('favourites', JSON.stringify(this.items));

    // console.log('storage');
    // console.log(localStorage.getItem('favourites'));
  }

  getItems() {
    // console.log(localStorage.getItem('favourites'));

    return this.items;
  }

  /**
   * Resets the beers and updates the favourites page.
   */
  clearFavourites() {
    this.items = [];

    localStorage.setItem('favourites', JSON.stringify(this.items));
  }
}
