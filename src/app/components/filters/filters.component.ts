import { Component, OnInit, Output } from '@angular/core';

import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  constructor(private beersService: BeersService) {}

  ngOnInit() {}

  selectPage(filter: string = 'no-filter') {
    this.beersService.setFilter(filter);
  }
}
