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

  constructor(private beersService: BeersService, private favouritesService: FavouritesService) {}

  ngOnInit() {
    this.updatePage();
  }

  updatePage(page?: number) {
    this.beersService.getBeers(page).subscribe(items => (this.beers = items));
    console.log(this.beers);
  }

  addToFavourites(beer) {
    this.favouritesService.addToFavourites(beer);
  }
}
