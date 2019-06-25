import { Component, OnInit } from '@angular/core';

import { FavouritesService } from '../../services/favourites.service';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  items;

  constructor(
    private favouritesService: FavouritesService,
    private beersService: BeersService
  ) {}

  ngOnInit() {
    this.items = this.favouritesService.getItems();
  }

  removeBeer(beer) {
    this.favouritesService.removeFromFavourites(beer);
  }

  clearFavourites() {
    this.items = this.favouritesService.clearFavourites();
  }

  selectBeer(beer) {
    this.beersService.setBeerById(beer.id);
  }
}
