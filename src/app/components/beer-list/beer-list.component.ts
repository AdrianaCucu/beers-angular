import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BeersService } from '../../services/beers.service';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers; // This array stores all beers retrieved so far with the current filter.
  currentBeers;
  page: number;

  // filters = ['medium', 'weak'];
  filters: [];

  constructor(
    private beersService: BeersService,
    private favouritesService: FavouritesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.beers = [];
    this.page = 1;
    this.updatePage();
  }

  addFilter(filter) {
    if (filter === 'reset') {
      this.beersService.resetFilters();
    } else {
      if (filter === 'random') {
        this.beersService.resetFilters();
      }
      this.beersService.addFilter(filter);
    }
    this.ngOnInit();
  }

  updatePage() {
    this.filters = this.beersService.getFilters();

    if (this.filters.length) {
      for (const filter of this.filters) {
        this.beersService.getBeers(this.page, filter).subscribe(
          items => (
            (this.currentBeers = items), this.beers.push(...this.currentBeers),

            console.log(this.currentBeers),
            console.log(this.beers)
          )
        );
      }
    }

    // If no filter is selected, all beers are retrieved.
    else {
      this.beersService
        .getBeers(this.page, 'no-filter')
        .subscribe(
          items => (
            (this.currentBeers = items), this.beers.push(...this.currentBeers),

            console.log(this.currentBeers),
            console.log(this.beers)
          )
        );
    }
  }

  addToFavourites(beer) {
    this.favouritesService.addToFavourites(beer);
  }

  scrollHandler(e) {
    // console.log(e);

    if (e === 'bottom') {
      this.page++;
      this.updatePage();
    }
  }
}
