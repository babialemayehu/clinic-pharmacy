import { Component, OnInit } from '@angular/core';
import { Order } from '../model/Order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-drug-route',
  templateUrl: './drug-route.component.html',
  styleUrls: ['./drug-route.component.scss']
})
export class DrugRouteComponent implements OnInit {

  private orders: Order[] = []; 
  constructor(public _order:OrderService) { }

  ngOnInit() {
    this._order.getOrderOfPharmacy().subscribe(
      (orders) => {
        this.orders = orders; 
      }
    )
  }

}
