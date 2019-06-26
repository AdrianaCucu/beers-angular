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
  filter: string;

  constructor(
    private beersService: BeersService,
    private favouritesService: FavouritesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.beers = [];
    this.page = 1;
    this.filter = this.router.url.replace('/', '');
    this.updatePage(this.filter);
  }

  updatePage(filter?: string) {
    this.beersService.getBeers(this.page, filter).subscribe(
      items => (
        (this.currentBeers = items), this.beers.push(...this.currentBeers)

        // For testing:
        // console.log(this.currentBeers),
        // console.log(this.beers)
      )
    );
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
