import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeersService {
  API_PATH = 'https://api.punkapi.com/v2';
  MAX_PER_PAGE = 50;

  constructor(private http: HttpClient) {}

  getBeers(page: number = 1, filter = 'none') {
    // Response object is JSON by default.
    // Do not map response to response.json(), gives error
    switch (filter) {
      case 'none':
        return this.http.get(
          `${this.API_PATH}/beers?page=${page}&per_page=${this.MAX_PER_PAGE}`
        );
      case 'weak':
        return this.http.get(
          `${this.API_PATH}/beers?page=${page}&per_page=${
            this.MAX_PER_PAGE
          }&abv_lt=4.5`
        );
    }
  }

  // !!!!!!!! NEED TO ADD FILTERS !!!!!!!!!!!!
}
