import { Component, AfterViewInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.css']
})
export class GoogleAuthComponent implements AfterViewInit {
  public auth2: any;
  public profile;

  constructor(private authService: AuthService) {}

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '210762821208-ved7kejd3nteooa841bdv0sf03476ajv.apps.googleusercontent.com',
        scope: 'profile email'
      });
      this.attachSignIn(document.getElementById('signIn'));
    });
  }

  public attachSignIn(element) {
    this.auth2.attachClickHandler(
      element,
      {},
      googleUser => {
        this.profile = googleUser.getBasicProfile();
        this.authService.setProfile(this.profile);
        // console.log('token', googleUser.getAuthResponse().id_token);
        // console.log('id', profile.getId());
        // console.log('name', this.profile.getName());
        // console.log('image', this.profile.getImageUrl());
        // console.log('email', this.profile.getEmail());
        this.authService.setStatus(true);
      },
      error => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  }

  isSignedIn() {
    return this.authService.isSignedIn;
  }

  ngAfterViewInit() {
    this.googleInit();
  }
}
