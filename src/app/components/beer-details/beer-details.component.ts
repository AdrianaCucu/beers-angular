import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FavouritesService } from 'src/app/services/favourites.service';
import { BeersService } from 'src/app/services/beers.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  items;
  id;

  similarItems;
  abv;
  idError: boolean;

  constructor(
    private favouritesService: FavouritesService,
    private beersService: BeersService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idError = false;

    console.log(this.route.params);
    this.route.params.subscribe(params => (this.id = params['beerId']));
    console.log(this.id);

    this.updatePage();
  }

  /**
   * Checks that the id is a positive integer between 1 and 325.
   *
   * @param id - the beer id contained in the route
   */
  validateId(id: string) {
    return /^\d+$/.test(id) && parseInt(id, 10) > 0 && parseInt(id, 10) < 326;
  }

  updatePage() {
    if (this.validateId(this.id)) {
      this.beersService.getSelectedBeer(this.id).subscribe(
        item => (
          (this.items = item),
          (this.abv = this.items[0].abv),
          this.beersService.getSimilarBeers(this.abv).subscribe(
            similar => (this.similarItems = similar)
            // console.log(this.similarItems))
          )
        )
      );
    } else {
      this.idError = true;
    }
  }

  isInFavourites(beer) {
    return this.favouritesService.isInFavourites(beer);
  }

  updateFavourites(beer) {
    this.favouritesService.updateFavourites(beer);
  }

  isInCart(beer) {
    return this.cartService.isInCart(beer);
  }

  updateCart(beer) {
    this.cartService.updateCart(beer);
  }
}
