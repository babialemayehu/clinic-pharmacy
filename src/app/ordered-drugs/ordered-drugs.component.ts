import { Component, OnInit } from '@angular/core';
import { Drug_order } from '../model/Drug_order';
import { OrderService } from '../service/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordered-drugs',
  templateUrl: './ordered-drugs.component.html',
  styleUrls: ['./ordered-drugs.component.scss']
})
export class OrderedDrugsComponent implements OnInit {

  private $durg_orders: Drug_order[] = []; 
  constructor(private _order: OrderService, private _activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activeRoute.params.subscribe(
      param => {
        this._order.orderedDrugs(param.order_id).subscribe(
          drug_orders => { this.$durg_orders = drug_orders; }
        ); 
      }
    )
  }

}
