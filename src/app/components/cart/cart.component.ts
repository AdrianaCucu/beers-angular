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
  items;

  deviceWidth;
  link;

  checkoutForm;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    route.params.subscribe(params => (this.link = params['cart-link']));
    // console.log(this.link);

    this.checkoutForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.deviceWidth = window.innerWidth;

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

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    window.alert('Your order has been submitted');
    this.clearCart();
    this.checkoutForm.reset();
  }
}
