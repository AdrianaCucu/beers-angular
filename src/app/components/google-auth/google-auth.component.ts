import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements AfterViewInit {
  GoogleAuth;
  public user;
  public profile;
  public signedIn;

  constructor() {}

  public googleInit() {
    gapi.load('auth2', () => {
      gapi.auth2
        .init({
          client_id:
            '210762821208-ved7kejd3nteooa841bdv0sf03476ajv.apps.googleusercontent.com',
          scope: 'profile'
        })
        .then(() => {
          this.GoogleAuth = gapi.auth2.getAuthInstance();
          // console.log(this.GoogleAuth);
          // console.log(this.GoogleAuth.currentUser);
          // console.log(this.GoogleAuth.isSignedIn.get());
        });
      // this.attachSignIn(document.getElementById('signIn'));
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
      // console.log('reached sign in', this.signedIn, this.user);
      // console.log(this.GoogleAuth.isSignedIn.get());
    });
  }

  signOut() {
    this.GoogleAuth.signOut().then(() => {
      this.signedIn = false;
      this.user = null;
      // console.log('reached sign out', this.signedIn, this.user);
      // console.log(this.GoogleAuth.isSignedIn.get());
    });
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
