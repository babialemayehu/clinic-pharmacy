import { Component, OnInit } from '@angular/core';
import { LaboratoryQueueService } from '../service/laboratory-queue.service';
import { Router } from '@angular/router';
import { PharmacyQueueService } from '../service/pharmacy-queue.service';

@Component({
  selector: 'app-empty-queue',
  templateUrl: './empty-queue.component.html',
  styleUrls: ['./empty-queue.component.scss']
})
export class EmptyQueueComponent implements OnInit {

  private empty: boolean = true; 
  private queueChecker; 

  constructor(
    private _pharmacyQueue: PharmacyQueueService, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.queueChecker = setInterval(()=>{
      this._pharmacyQueue.isEmpty().subscribe(
        (isEmpty) => {
          this.empty = isEmpty; 
        }
      )
    }, 10000); 
  }

  next(){
    this._pharmacyQueue.next().subscribe(
      (responce) => {
        this._router.navigate(['/prescription/'+responce.id]);
      },
      (error) => {
        if(error.status == 406){
          this._router.navigate(['/prescription/empty']); 
        }
      }
    ); 
  }

}
