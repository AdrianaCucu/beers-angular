import { Injectable } from '@angular/core';

import { ClientDetails } from '../components/client-details';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders = localStorage.getItem('orders')
    ? JSON.parse(localStorage.getItem('orders'))
    : [];

  constructor() {}

  getCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    let date = '';

    day < 10 ? (date = '0' + day) : (date += day);
    month < 10 ? (date = date + '/0' + month) : (date = date + '/' + month);
    date = date + '/' + year;

    return date;
  }

  updateOrders(order: ClientDetails) {
    order.orderDate = this.getCurrentDate();
    this.orders.push(order);
    localStorage.setItem('orders', JSON.stringify(this.orders));
  }
}
