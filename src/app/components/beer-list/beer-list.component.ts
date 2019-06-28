import { Component, OnInit } from '@angular/core';

import { BeersService } from '../../services/beers.service';
import { FavouritesService } from '../../services/favourites.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers; // This array stores all beers retrieved so far with the current filters.
  currentBeers;
  page: number;

  // filters = ['medium', 'weak'];
  filters: [];

  constructor(
    private beersService: BeersService,
    private favouritesService: FavouritesService
  ) {}

  ngOnInit() {
    this.beers = [];
    this.page = 1;
    this.updatePage();
  }

  updateFilter(filter) {
    if (filter === 'reset') {
      this.beersService.resetFilters();
    } else {
      if (this.beersService.containsFilter(filter)) {
        this.beersService.removeFilter(filter);
      } else {
        if (filter === 'random') {
          this.beersService.resetFilters();
        } else {
          this.beersService.removeFilter('random');
        }
        this.beersService.addFilter(filter);
      }
    }

    this.ngOnInit();
  }

  updatePage() {
    this.filters = this.beersService.getFilters();

    if (this.filters.length) {
      for (const filter of this.filters) {
        this.beersService.getBeers(this.page, filter).subscribe(
          items => (
            (this.currentBeers = items),
            this.beers.push(...this.currentBeers),
            this.beers.sort((a, b) => (a.id > b.id ? 1 : -1)) // Sorts the beers by id.
            // console.log(this.currentBeers),
            // console.log(this.beers)
          )
        );
      }
    }

    // If no filter is selected, all beers are retrieved.
    else {
      this.beersService.getBeers(this.page, 'no-filter').subscribe(
        items => (
          (this.currentBeers = items), this.beers.push(...this.currentBeers)

          // console.log(this.currentBeers),
          // console.log(this.beers)
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
