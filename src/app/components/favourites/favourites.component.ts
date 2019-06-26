import { Component, OnInit } from '@angular/core';

import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  items;

  constructor(
    private favouritesService: FavouritesService
  ) {}

  ngOnInit() {
    // console.log(localStorage.getItem('favourites'));

    this.items = this.favouritesService.getItems();
  }

  removeBeer(beer) {
    this.favouritesService.removeFromFavourites(beer);
    window.location.reload();
  }

  clearFavourites() {
    this.favouritesService.clearFavourites();
    window.location.reload();
  }
}
