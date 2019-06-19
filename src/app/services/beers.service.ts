import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class BeersService {
  API_PATH = 'https://api.punkapi.com/v2';
  MAX_PER_PAGE = 12;

  constructor(private http: HttpClient) {}

  getBeers(page: number = 1) {
    const response = this.http
      .get(`${this.API_PATH}/beers?page=${page}&per_page=${this.MAX_PER_PAGE}`)
      .pipe(map((res: Response) => res.json));

    console.log(response);
    return response;
  }
}
