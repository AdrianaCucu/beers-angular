import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FavouritesService } from 'src/app/services/favourites.service';
import { BeersService } from 'src/app/services/beers.service';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.router.url.replace(/\D/g, '');
    this.beersService.setBeerById(this.id);
    console.log(this.id);
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
