import { Component, OnInit, Input } from '@angular/core';
import { MatTab, MatTableDataSource, MatDialog } from '@angular/material';
import { Order } from '../model/Order';
import { OrderService } from '../service/order.service';
import { RouterEvent, Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component'; 

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss']
})
export class OrdersTableComponent implements OnInit {

  private orderDataSource: MatTableDataSource<Order> = new MatTableDataSource<Order>(); 
  private $orders: Order[] = []; 
  private $selectedOrders: Order[] = []; 
  private all: boolean; 

  public displayedColumns = [
      'recived', 
      'no',
      'drug',
      'quantity',
      'autorized',
      'ordered_quantity',
      'adjusted_quantity',
      'issued_quantity',   
      'expier_at',
      'is_recived',
      'recived_at']; 


  @Input() orders; 


  ngOnChanges(){
    this.$orders = this.orders;
    this.orderDataSource.data = this.orders;
    this.refresh(); 
  }
  constructor(private _dialog: MatDialog, private _order: OrderService, private _router: Router) { }

  ngOnInit() {
  }

  select(e, order: Order){
    order.selected = e.checked; 
    this.refresh(); 
  }

  selectAll(e){
    this.$orders.forEach((order)=>{
     if((order.issued_quantity != null && order.recived_at == null)){
        if(e.checked){
          order.selected = true; 
        }else
          order.selected = false; 
     }
    }); 

    this.orderDataSource.data = this.orders;
  }

  refresh(){
    let temp = true;
    this.$orders.forEach(
      (order) => {
        order.adjusted_quantity = order.ordered_quantity; 
        if((order.issued_quantity != null && order.recived_at == null))
          if(!order.selected){ temp = false; }
      }
    ); 
    this.all = temp; 
  }

  recive(){
    let dialogRef = this._dialog.open(AlertComponent, {
      width: "400px", 
      data: {
        message: "Are you shure you have recived selected drugss", 
        dialog: "confirm"
      }
    }); 
    //let orders = this.$selectedOrders; 
    dialogRef.afterClosed().subscribe(
      (response)=> {
        this._order.recived(this.$orders).subscribe(
          responce => {
            this._router.navigate(["/drug"]); 
          }
        )
    }); 
  }

}
