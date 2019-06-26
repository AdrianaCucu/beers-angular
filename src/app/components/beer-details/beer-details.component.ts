import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FavouritesService } from 'src/app/services/favourites.service';
import { BeersService } from 'src/app/services/beers.service';
import { isNumber } from 'util';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  items;
  id;

  constructor(
    private favouritesService: FavouritesService,
    private beersService: BeersService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe();
    this.id = route.params.value.beerId;
  }

  ngOnInit() {
    // this.id = this.router.url.replace(/\D/g, '');
    this.beersService.setBeerById(this.id);
    console.log(this.id);
    this.updatePage();
  }

  /**
   * Checks that the id is a positive integer between 1 and 325.
   *
   * @param id - the beer id contained in the route
   */
  validateId(id: string) {
    return (
      /^\d+$/.test(this.id) &&
      parseInt(this.id, 10) > 0 &&
      parseInt(this.id, 10) < 326
    );
  }

  updatePage() {
    if (this.validateId(this.id)) {
      this.beersService
        .getBeers(1, 'selected')
        .subscribe(item => (this.items = item));
    }
  }

  addToFavourites(beer) {
    this.favouritesService.addToFavourites(beer);
  }
}
