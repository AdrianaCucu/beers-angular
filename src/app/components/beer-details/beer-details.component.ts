import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FavouritesService } from 'src/app/services/favourites.service';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  items;

  constructor(
    private route: ActivatedRoute,
    private favouritesService: FavouritesService,
    private beersService: BeersService
  ) {}

  ngOnInit() {
    this.updatePage();
  }

  updatePage() {
    this.beersService
      .getBeers(1, 'selected')
      .subscribe(item => (this.items = item));
  }

  addToFavourites(beer) {
    this.favouritesService.addToFavourites(beer);
  }
}
