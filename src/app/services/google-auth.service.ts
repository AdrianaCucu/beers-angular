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
    : undefined;

  setStatus(signedIn: boolean = false, profile?: any) {
    this.details['signedIn'] = signedIn;
    this.details['profile'] = profile;

    localStorage.setItem('userDetails', JSON.stringify(this.details));
    console.log(localStorage.getItem('userDetails'));
  }

  getName() {
    return this.profile.ig;
  }

  getImage() {
    return this.profile.Paa;
  }
}
