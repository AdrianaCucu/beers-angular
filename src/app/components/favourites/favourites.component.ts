import { Component, OnInit } from '@angular/core';

import { FavouritesService } from '../../services/favourites.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  items;

  constructor(
    private favouritesService: FavouritesService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    // console.log(localStorage.getItem('favourites'));

    this.items = this.favouritesService.getItems();
  }

  removeBeer(beer) {
    this.favouritesService.removeFromFavourites(beer);
  }

  isInCart(beer) {
    return this.cartService.isInCart(beer);
  }

  updateCart(beer) {
    this.cartService.updateCart(beer);
  }

  clearFavourites() {
    this.favouritesService.clearFavourites();
    window.location.reload();
  }
}
