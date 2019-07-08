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

  constructor(private googleAuthService: GoogleAuthService) {}

  ngOnInit() {
    this.name = this.googleAuthService.getName();
    this.imageUrl = this.googleAuthService.getImage();
  }
}
