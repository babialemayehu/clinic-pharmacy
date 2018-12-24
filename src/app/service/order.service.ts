import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../model/Order'; 
import { Drug_order } from '../model/Drug_order';
import { RootURL } from '../model/RootURL';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public _http: HttpClient) { }
  
  private root = RootURL;  

  newOrder(orders: Order[]){
    const URL = this.root+"/ajax/post/order/new"; 
    return this._http.post(URL, {orders: orders}); 
  }

  getOrderOfPharmacy():Observable<Order[]>{
    const URL = this.root+"/ajax/get/order/get order to store"; 
    return this._http.get<Order[]>(URL);
  }

  getUserOrders():Observable<Order[]>{
    const URL = this.root+"/ajax/get/order/user orders"; 
    return this._http.get<Order[]>(URL); 
  }

  orderedDrugs(order_id: number):Observable<Drug_order[]>{
    const URL = this.root+"/ajax/get/order/ordered drugs/"+order_id; 
    return this._http.get<Drug_order[]>(URL); 
  }

  recived(orders: Order[]){
    const URL = this.root+"/ajax/update/order/recive"; 
    return this._http.put(URL, orders); 
  }
}
