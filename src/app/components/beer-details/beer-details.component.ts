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
  beer;

  addToFavourites(beer) {
    this.favouritesService.addToFavourites(beer);
  }

  constructor(
    private route: ActivatedRoute,
    private favouritesService: FavouritesService,
    private beersService: BeersService
  ) {}

  ngOnInit() {
    this.beer = this.beersService.getSelectedBeer();
    console.log(this.beer);
  }
}
