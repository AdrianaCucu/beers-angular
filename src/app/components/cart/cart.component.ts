import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  constructor(
    private cartService: CartService,
  ) {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    window.alert('Your order has been submitted');
    this.clearCart();
  }
}
