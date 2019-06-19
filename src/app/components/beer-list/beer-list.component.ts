import { Component, OnInit } from '@angular/core';

import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers;

  constructor(private beersService: BeersService) {}

  ngOnInit() {
    this.updatePage();
  }

  updatePage(page?: number) {
    this.beersService.getBeers(page).subscribe(beers => (this.beers = beers));
  }
}
