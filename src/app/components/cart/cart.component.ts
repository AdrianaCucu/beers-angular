import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit() {
    // console.log(localStorage.getItem('favourites'));

    this.items = this.cartService.getItems();
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
