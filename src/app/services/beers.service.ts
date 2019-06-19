import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeersService {
  API_PATH = 'https://api.punkapi.com/v2';
  MAX_PER_PAGE = 80;

  constructor(private http: HttpClient) {}

  getBeers(page: number = 1) {
    // Response object is JSON by default.
    // Do not map response to response.json(), gives error
    return this.http.get(
      `${this.API_PATH}/beers?page=${page}&per_page=${this.MAX_PER_PAGE}`
    );
  }

  // !!!!!!!! NEED TO ADD FILTERS !!!!!!!!!!!!
}
