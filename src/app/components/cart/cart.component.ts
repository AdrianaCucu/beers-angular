import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  deviceWidth;
  link;

  checkoutForm;

  constructor(private cartService: CartService, private route: ActivatedRoute) {
    route.params.subscribe(params => (this.link = params['cart-link']));
    // console.log(this.link);
  }

  ngOnInit() {
    this.deviceWidth = window.innerWidth;
  }

  removeBeer(beer) {
    this.cartService.removeFromCart(beer);
  }

  addToCart(beer) {
    this.cartService.addToCart(beer);
  }

  clearCart() {
    this.cartService.clearCart();
    window.location.reload();
  }
}
