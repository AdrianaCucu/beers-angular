import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

  constructor() {}

  addToCart(beer) {
    this.items.push(beer);

    // console.log(this.items);

    localStorage.setItem('cart', JSON.stringify(this.items));

    // console.log('storage');
    // console.log(localStorage.getItem('cart'));
  }

  /**
   * Removes both the beer and the id.
   */
  removeFromCart(beer) {
    for (let i = 0; i < this.items.length; i++) {
      if (beer.id === this.items[i].id) {
        this.items.splice(i, 1);
      }
    }

    // console.log(this.items);

    localStorage.setItem('cart', JSON.stringify(this.items));

    // console.log('storage');
    // console.log(localStorage.getItem('cart'));
  }

  getItems() {
    // console.log(localStorage.getItem('cart'));

    return this.items;
  }

  /**
   * Resets the beers and the ids and updates the favourites page.
   */
  clearCart() {
    this.items = [];

    localStorage.setItem('cart', JSON.stringify(this.items));
  }
}
