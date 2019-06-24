import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeersService {
  API_PATH = 'https://api.punkapi.com/v2';
  MAX_PER_PAGE = 20;

  selectedBeerId;
  filter = 'no-filter';
  page = 1;

  constructor(private http: HttpClient) {}

  setBeerById(id) {
    this.selectedBeerId = id;
  }

  setFilter(filter = 'no-filter') {
    this.filter = filter;
  }

  setPageNumber(filter = 'no-filter') {
    if (filter === this.filter) {
      this.page++;
    } else {
      this.page = 1;
    }
  }

  getBeers() {
    // Response object is JSON by default.
    // Do not map response to response.json(), gives error
    switch (this.filter) {
      case 'selected':
        return this.http.get(`${this.API_PATH}/beers/${this.selectedBeerId}`);

      case 'weak':
        return this.http.get(
          `${this.API_PATH}/beers?page=${this.page}&per_page=${
            this.MAX_PER_PAGE
          }&abv_lt=5`
        );

      case 'medium':
        return this.http.get(
          `${this.API_PATH}/beers?page=${this.page}&per_page=${
            this.MAX_PER_PAGE
          }&abv_lt=10&abv_gt=5`
        );

      case 'strong':
        return this.http.get(
          `${this.API_PATH}/beers?page=${this.page}&per_page=${
            this.MAX_PER_PAGE
          }&abv_gt=10`
        );

      case 'random':
        return this.http.get(`${this.API_PATH}/beers/random`);

      default:
        return this.http.get(
          `${this.API_PATH}/beers?page=${this.page}&per_page=${
            this.MAX_PER_PAGE
          }`
        );
    }
  }
}
