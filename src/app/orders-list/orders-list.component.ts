import { Component, OnInit } from '@angular/core';
import { Order } from '../model/Order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  private $orders: Order[] = []; 
  constructor(private _order: OrderService) { }

  ngOnInit() {
    this._order.getUserOrders().subscribe(
      (responce) => {this.$orders = responce; }
    ); 
  }
  

}
