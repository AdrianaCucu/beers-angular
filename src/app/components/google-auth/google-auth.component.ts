import { Component, AfterViewInit } from '@angular/core';

import { GoogleAuthService } from '../../services/google-auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var gapi: any;

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements AfterViewInit {
  deviceWidth;

  GoogleAuth;
  public user;
  public signedIn;

  public profile;
  public imageUrl;

  constructor(private googleAuthService: GoogleAuthService) {
    this.deviceWidth = window.innerWidth;
    this.signedIn = this.googleAuthService.signedIn;
    this.setProfile();
  }

  public googleInit() {
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id:
            '210762821208-ved7kejd3nteooa841bdv0sf03476ajv.apps.googleusercontent.com',
          scope: 'email profile'
        })
        .then(() => {
          this.GoogleAuth = gapi.auth2.getAuthInstance();
          // console.log(this.GoogleAuth);
          // console.log(this.GoogleAuth.currentUser);
          // console.log(this.GoogleAuth.isSignedIn.get());
        });
    });
  }

  handleAuthClick() {
    this.signedIn = !this.signedIn;
    this.signedIn ? this.signIn() : this.signOut();
  }

  signIn() {
    this.GoogleAuth.signIn().then(() => {
      this.signedIn = true;
      this.user = this.GoogleAuth.currentUser.get();
      this.profile = this.user.getBasicProfile();
      this.imageUrl = this.profile.getImageUrl();
      this.googleAuthService.setStatus(
        this.signedIn,
        this.profile.getName(),
        this.imageUrl
      );
      // console.log(this.imageUrl);
      // console.log('reached sign in', this.signedIn, this.user);
      // console.log(this.GoogleAuth.isSignedIn.get());
    });
  }

  signOut() {
    this.GoogleAuth.signOut().then(() => {
      this.signedIn = false;
      this.user = null;
      this.googleAuthService.setStatus();
      // console.log('reached sign out', this.signedIn, this.user);
      // console.log(this.GoogleAuth.isSignedIn.get());
    });
  }

  setProfile() {
    this.profile = this.googleAuthService.profile;
    if (this.googleAuthService.signedIn) {
      this.imageUrl = this.googleAuthService.getImage();
    }
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
