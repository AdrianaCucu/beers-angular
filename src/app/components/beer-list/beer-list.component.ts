import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BeersService } from '../../services/beers.service';
import { FavouritesService } from '../../services/favourites.service';

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

  updatePage(filter?: string) {
    this.beersService.setPageNumber(filter);
    this.beersService.setFilter(filter);
    this.beersService.getBeers().subscribe(items => (this.beers = items));
  }

  addToFavourites(beer) {
    this.favouritesService.addToFavourites(beer);
  }

  selectBeer(beer) {
    this.beersService.setBeerById(beer.id);
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.updatePage();
    }
  }
}
