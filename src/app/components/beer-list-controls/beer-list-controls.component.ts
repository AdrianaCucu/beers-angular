import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beer-list-controls',
  templateUrl: './beer-list-controls.component.html',
  styleUrls: ['./beer-list-controls.component.css']
})
export class BeerListControlsComponent implements OnInit {
  @Output() updatePage = new EventEmitter();
  currentPage = 1;

  constructor() {}

  ngOnInit() {}

  previousPage() {
    this.currentPage--;
    this.updatePage.emit(this.currentPage);
  }

  nextPage() {
    this.currentPage++;
    this.updatePage.emit(this.currentPage);
  }
}
