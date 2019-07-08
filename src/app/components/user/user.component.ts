import { Component, OnInit } from '@angular/core';

import { GoogleAuthService } from 'src/app/services/google-auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  imageUrl: string;
  signedIn: boolean;
  orders: [];

  constructor(
    private googleAuthService: GoogleAuthService,
    private ordersService: OrderService
  ) {
    this.name = this.googleAuthService.getName();
    this.imageUrl = this.googleAuthService.getImage();
    // console.log(this.name, this.imageUrl);

    this.orders = this.ordersService.getOrders();
    console.log(this.orders);
    this.googleAuthService.setOrders(this.orders);

    this.signedIn = this.googleAuthService.signedIn;
    // console.log(this.signedIn);
  }

  ngOnInit() {}
}
