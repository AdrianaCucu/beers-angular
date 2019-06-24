import { Component, OnInit } from '@angular/core';

import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(private beersService: BeersService) {}

  ngOnInit() {}

  selectPage(filter: string) {
    this.beersService.setFilter(filter);
  }
}
