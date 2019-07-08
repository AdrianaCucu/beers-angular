import { Component, OnInit } from '@angular/core';

import { GoogleAuthService } from 'src/app/services/google-auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name;
  imageUrl;
  signedIn;

  constructor(private googleAuthService: GoogleAuthService) {
    this.name = this.googleAuthService.getName();
    this.imageUrl = this.googleAuthService.getImage();
    // console.log(this.name, this.imageUrl);

    this.signedIn = this.googleAuthService.signedIn;
  }

  ngOnInit() {}
}
