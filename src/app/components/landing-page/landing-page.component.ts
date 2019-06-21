import { Component, OnInit } from '@angular/core';

import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private beersService: BeersService) {}

  ngOnInit() {}

  updatePage(page?: number, filter?: string) {
    this.beersService.getBeers(page, filter);
  }
}
