import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  deviceWidth;

  abv = ['weak', 'medium', 'strong'];
  ibu = ['low', 'normal', 'high'];

  constructor(
    private beersService: BeersService
  ) {}

  ngOnInit() {
    this.deviceWidth = window.innerWidth;
    // console.log(this.deviceWidth);
  }

  filterSelected(filter) {
    return this.beersService.containsFilter(filter);
  }

  handleInput(event) {
    this.beersService.resetFilters();
    this.beersService.setName(event.target.value);
    this.selectFilter('name');
  }

  selectFilter(filter: string) {
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

    this.clickEvent.emit(filter);
  }
}
