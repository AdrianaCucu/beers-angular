import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Output() clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectPage(filter: string) {
    this.clickEvent.emit(filter);
  }
}
