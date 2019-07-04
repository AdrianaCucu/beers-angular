import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeersService {
  API_PATH = 'https://api.punkapi.com/v2';
  MAX_PER_PAGE = 20;

  filters = localStorage.getItem('filters')
    ? JSON.parse(localStorage.getItem('filters'))
    : [];

  name: string;

  constructor(private http: HttpClient) {}

  /**
   * Returns an array containing only the selected beer.
   *
   * @param id - the id of the beer (integer between 1-325)
   */
  getSelectedBeer(id) {
    return this.http.get(`${this.API_PATH}/beers/${id}`);
  }

  // Beer name provided by the user.
  setName(name: string) {
    this.name = name.replace(/\s+/g, '_');
  }

  getFilters() {
    // console.log(this.filters);

    return this.filters;
  }

  containsFilter(filter) {
    // console.log(this.filters.includes(filter));

    return this.filters.includes(filter);
  }

  addFilter(filter) {
    let exists = false;

    if (this.filters.length) {
      for (let i = 0; i < this.filters.length && !exists; i++) {
        if (filter === this.filters[i]) {
          exists = true;
        }
      }
    }

    if (!exists) {
      this.filters.push(filter);
    }

    localStorage.setItem('filters', JSON.stringify(this.filters));

    // console.log('storage-filters');
    // console.log(localStorage.getItem('filters'));
  }

  removeFilter(filter) {
    for (let i = 0; i < this.filters.length; i++) {
      if (filter === this.filters[i]) {
        this.filters.splice(i, 1);
      }
    }

    localStorage.setItem('filters', JSON.stringify(this.filters));

    // console.log('storage-filters');
    // console.log(localStorage.getItem('filters'));
  }

  resetFilters() {
    this.filters = [];
    localStorage.setItem('filters', JSON.stringify(this.filters));

    // console.log('storage-filters');
    // console.log(localStorage.getItem('filters'));
  }

  /**
   * Returns array of beer objects based on the filter and the page number.
   *
   * @param page - the current page
   * @param filter the selected filter
   */
  getBeers(page, filter?) {
    // Response object is JSON by default.
    // Do not map response to response.json(), gives error
    switch (filter) {
      case 'random':
        return this.http.get(`${this.API_PATH}/beers/random`);

      case 'name':
        // If the name is empty, goes to default.
        if (this.name) {
          return this.http.get(`${this.API_PATH}/beers?beer_name=${this.name}`);
        }

      default:
        return this.http.get(
          `${this.API_PATH}/beers?page=${page}&per_page=${this.MAX_PER_PAGE}`
        );
    }
  }

  // Filters the beers based on the selected filters.
  filterBeers(beers) {
    let filteredBeers = beers;

    if (this.filters.length) {
      if (
        this.filters.includes('weak') ||
        this.filters.includes('medium') ||
        this.filters.includes('strong')
      ) {
        filteredBeers = this.filterABV(filteredBeers);
      }

      if (
        this.filters.includes('low') ||
        this.filters.includes('normal') ||
        this.filters.includes('high')
      ) {
        filteredBeers = this.filterIBU(filteredBeers);
      }
    }

    // console.log(filteredBeers);
    return filteredBeers;
  }

  // Filtering based on the ABV property.
  filterABV(beers) {
    const filteredBeers = [];

    for (const filter of this.filters) {
      switch (filter) {
        case 'weak': {
          filteredBeers.push(...beers.filter(beer => beer.abv < 5));
          break;
        }

        case 'medium': {
          filteredBeers.push(
            ...beers.filter(beer => beer.abv >= 5 && beer.abv <= 10)
          );
          break;
        }

        case 'strong': {
          filteredBeers.push(...beers.filter(beer => beer.abv > 10));
          break;
        }
      }
    }

    return filteredBeers;
  }

  // Filtering based on the IBU property.
  filterIBU(beers) {
    const filteredBeers = [];

    for (const filter of this.filters) {
      switch (filter) {
        case 'low': {
          filteredBeers.push(...beers.filter(beer => beer.ibu < 15));
          break;
        }

        case 'normal': {
          filteredBeers.push(
            ...beers.filter(beer => beer.ibu >= 15 && beer.ibu <= 80)
          );
          break;
        }

        case 'high': {
          filteredBeers.push(...beers.filter(beer => beer.ibu > 80));
          break;
        }
      }
    }

    return filteredBeers;
  }

  getSimilarBeers(abv) {
    return this.http.get(
      `${this.API_PATH}/beers?per_page=12&abv_gt=${abv - 1}&abv_lt${abv + 1}`
    );
  }
}
