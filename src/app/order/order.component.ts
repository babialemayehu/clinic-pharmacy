import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'; 
import { Order } from '../model/Order';
import { Drug } from '../model/Drug';
import { PharmacyService } from '../service/pharmacy.service';
import { MatTableDataSource } from '@angular/material';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  private orderForm: FormGroup; 
  private orders: Order[] = []; 
  private drugAuto: Drug[] = []; 
  private fullDrug: Drug[] = []; 
  
  private orderDataSource: MatTableDataSource<Order> = new MatTableDataSource<Order>(); 
  private $orders: Order[] = []; 
  public displayedColumns = ['no', 'drug', 'quantity']; 
  
  constructor(
    private _form: FormBuilder,
    private _pharmacy: PharmacyService,
    private _order: OrderService, 
    private _route: Router) {
    this.orderForm = this._form.group({
      id: [""], 
      drug: [""], 
      orderd_quantity: [""]
    }); 
   }

  ngOnChanges(){
    console.log(this.orders); 
  }
  ngOnInit() {
    this.orderForm.controls.drug.valueChanges.subscribe(
      value => {  
          this._pharmacy.drugAutoComplet(value).subscribe(
          tests => { this.drugAuto = tests;this.fullDrug = tests;  }
      )}
    )
  }

  add(){
    this.$orders.push(this.orderForm.value); 
    this.orderDataSource.data = this.$orders; 
  }

  order(){
    this._order.newOrder(this.$orders).subscribe(
      () => {
        this._route.navigate(["/drug"]); 
      }
    )
  }

  get drug(){ return this.orderForm.get('drug'); }
  get orderd_quantity(){ return this.orderForm.get('orderd_quantity'); }
}
