import { Component, OnInit } from '@angular/core';

import { BeersService } from '../../services/beers.service';
import { FavouritesService } from 'src/app/services/favourites.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers;

  constructor(
    private beersService: BeersService,
    private favouritesService: FavouritesService
  ) {}

  ngOnInit() {
    this.updatePage();
  }

  updatePage(page?: number, filter?: string) {
    this.beersService
      .getBeers(page, filter)
      .subscribe(items => (this.beers = items));
  }

  addToFavourites(beer) {
    this.favouritesService.addToFavourites(beer);
  }

  selectBeer(beer) {
    this.beersService.setBeerById(beer.id);
  }
}
