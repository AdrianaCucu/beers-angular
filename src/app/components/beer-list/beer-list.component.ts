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
  beers = []; // This array stores all beers retrieved so far with the current filter.
  currentBeers;
  page = 1;

  constructor(
    private beersService: BeersService,
    private favouritesService: FavouritesService
  ) {}

  ngOnInit() {
    this.updatePage();
  }

  updatePage(filter?: string) {
    this.beersService.getBeers(this.page, filter).subscribe(
      items => (
        (this.currentBeers = items),
        this.beers.push(...this.currentBeers),
        // For testing:
        console.log(this.currentBeers),
        console.log(this.beers)
      )
    );
  }

  addToFavourites(beer) {
    this.favouritesService.addToFavourites(beer);
  }

  selectBeer(beer) {
    this.beersService.setBeerById(beer.id);
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.page++;
      console.log(this.page);
      this.updatePage();
    }
  }
}
