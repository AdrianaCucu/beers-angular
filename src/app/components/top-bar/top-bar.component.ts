import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  abv = ['weak', 'medium', 'strong'];
  ibu = ['low', 'normal', 'high'];

  constructor(private beersService: BeersService) {}

  ngOnInit() {}

  filterSelected(filter) {
    return this.beersService.containsFilter(filter);
  }

  selectFilter(filter: string) {
    this.clickEvent.emit(filter);
  }
}
