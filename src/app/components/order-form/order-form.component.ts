import { Component } from '@angular/core';

import { ClientDetails } from '../client-details';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private cartService: CartService) {}

  clearCart() {
    this.cartService.clearCart();
    window.location.reload();
  }

  onSubmit() {
    this.submitted = true;
  }

  submitForm(customerData) {
    console.warn('Your order has been submitted', customerData);
    window.alert('Your order has been submitted');
  }
}
