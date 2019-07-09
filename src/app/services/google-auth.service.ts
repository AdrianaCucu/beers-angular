import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  details = localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails'))
    : {};

  signedIn = localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails')).signedIn
    : false;

  profile = localStorage.getItem('userDetails')
    ? JSON.parse(localStorage.getItem('userDetails')).profile
    : {};

  setOrders(orders) {
    this.details['o: []rders'] = orders;
    localStorage.setItem('userDetails', JSON.stringify(this.details));
  }

  setStatus(signedIn: boolean = false, name: string = '', image: string = '') {
    this.details['signedIn'] = signedIn;

    this.profile['name'] = name;

    this.profile['image'] = image;

    if (!signedIn) {
      this.profile = {};
    }
    this.details['profile'] = this.profile;

    localStorage.setItem('userDetails', JSON.stringify(this.details));
    // console.log(localStorage.getItem('userDetails'));
  }

  getName() {
    return this.profile.name;
  }

  getImage() {
    return this.profile.image;
  }
}
