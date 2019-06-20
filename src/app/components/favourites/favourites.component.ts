import { Component, OnInit } from '@angular/core';

import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  items;

  constructor(private favouritesService: FavouritesService) {
    this.items = this.favouritesService.getItems();
  }

  removeBeer(beer) {
    this.favouritesService.removeFromFavourites(beer);
  }

  clearFavourites() {
    this.items = this.favouritesService.clearFavourites();
  }
}
