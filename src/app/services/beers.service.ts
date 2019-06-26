import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeersService {
  API_PATH = 'https://api.punkapi.com/v2';
  MAX_PER_PAGE = 20;

  constructor(private http: HttpClient) {}

  /**
   *  Returns an array containing only the selected beer.
   * 
   * @param id - the id of the beer (integer between 1-325)
   */
  getSelectedBeer(id) {
    return this.http.get(`${this.API_PATH}/beers/${id}`);
  }

  /**
   * Returns array of beer objects based on the filter and the page number.
   *
   * @param page - the current page
   * @param filter the selected filter
   */
  getBeers(page, filter) {
    // Response object is JSON by default.
    // Do not map response to response.json(), gives error
    switch (filter) {
      case 'weak':
        return this.http.get(
          `${this.API_PATH}/beers?page=${page}&per_page=${
            this.MAX_PER_PAGE
          }&abv_lt=5`
        );

      case 'medium':
        return this.http.get(
          `${this.API_PATH}/beers?page=${page}&per_page=${
            this.MAX_PER_PAGE
          }&abv_lt=10&abv_gt=5`
        );

      case 'strong':
        return this.http.get(
          `${this.API_PATH}/beers?page=${page}&per_page=${
            this.MAX_PER_PAGE
          }&abv_gt=10`
        );

      case 'random':
        return this.http.get(`${this.API_PATH}/beers/random`);

      default:
        return this.http.get(
          `${this.API_PATH}/beers?page=${page}&per_page=${this.MAX_PER_PAGE}`
        );
    }
  }
}
