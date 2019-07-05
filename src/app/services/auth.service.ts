import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  profile = localStorage.getItem('profile')
    ? JSON.parse(localStorage.getItem('profile'))
    : null;
  isSignedIn: boolean;

  setProfile(profile) {
    // console.log('before set', localStorage.getItem('profile'));
    this.profile = profile;
    // console.log(this.profile);
    localStorage.setItem('profile', JSON.stringify(this.profile));
    this.setStatus(true);
  }

  setStatus(status: boolean) {
    this.isSignedIn = status;
    console.log(this.isSignedIn);
  }
}
