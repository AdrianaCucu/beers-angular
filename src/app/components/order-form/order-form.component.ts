import { Component } from '@angular/core';

import { ClientDetails } from '../client-details';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  countries = [
    'United States',
    'United Kingdom',
    'Romania',
    'Germany',
    'France'
  ];

  cardTypes = ['Visa', 'American Express', 'MasterCard'];

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  model = new ClientDetails(
    'Jane',
    'Doe',
    'Sunshine Str. 1',
    this.countries[0],
    this.cardTypes[0],
    8888888888888888,
    888,
    this.months[0],
    2019,
    'Apartment 1'
  );

  submitted = false;

  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  clearCart() {
    this.cartService.clearCart();
    window.location.reload();
  }

  onSubmit() {
    this.submitted = true;
    this.model.items = this.cartService.getItems();

    // console.log(this.model.items);
  }

  submitForm() {
    //  console.log('Your order has been submitted', this.model);
    window.alert('Your order has been submitted');

    // console.log(localStorage.getItem('orders'));

    this.orderService.updateOrders(this.model);

    // console.log(localStorage.getItem('orders'));

    this.clearCart();
  }
}
