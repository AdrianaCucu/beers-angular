import { Component } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items;

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    window.alert('Your order has been submitted');
    this.clearCart();
  }
}
