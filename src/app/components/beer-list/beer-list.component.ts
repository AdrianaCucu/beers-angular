import { Component, OnInit } from '@angular/core';

import { BeersService } from '../../services/beers.service';
import { FavouritesService } from '../../services/favourites.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers; // This array stores all beers retrieved so far with the current filters.
  currentBeers;
  allBeers;

  page: number;
  showLoader: boolean;

  filters;

  constructor(
    private beersService: BeersService,
    private favouritesService: FavouritesService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.beers = [];
    this.allBeers = [];
    this.page = 1;
    this.showLoader = true;
    this.filters = this.beersService.getFilters();
    // console.log(this.filters);
    this.updatePage();
  }

  updateFilter() {
    this.ngOnInit();
  }

  updatePage() {
    // Random beer.
    if (this.filters.includes('random')) {
      this.beersService
        .getBeers(this.page, 'random')
        .subscribe(items => (this.beers = items));
    }

    // Beers selected by name.
    else if (this.filters.includes('name')) {
      this.beersService
        .getBeers(this.page, 'name')
        .subscribe(items => (this.beers = items));
    }

    // If 'random' is not selected.
    else {
      this.beersService.getBeers(this.page).subscribe(
        items => (
          (this.currentBeers = items),
          this.allBeers.push(...this.currentBeers),
          (this.beers = this.beersService.filterBeers(this.allBeers)),
          this.beers.sort((a, b) => (a.id > b.id ? 1 : -1)) // Sorts the beers by id.

          // For testing:
          // console.log(this.currentBeers),
          // console.log(this.allBeers),
          // console.log(this.beers)
        )
      );

      this.showLoader = false;
    }
  }

  isInFavourites(beer) {
    return this.favouritesService.isInFavourites(beer);
  }

  updateFavourites(beer) {
    this.favouritesService.updateFavourites(beer);
  }

  addToCart(beer) {
    this.cartService.addToCart(beer);
  }

  scrollHandler(e) {
    // console.log(e);

    if (e === 'bottom') {
      this.page++;
      this.updatePage();
    }
  }
}
