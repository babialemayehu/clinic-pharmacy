import { Component, OnInit } from '@angular/core';
import { LaboratoryQueueService } from '../service/laboratory-queue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empty-queue',
  templateUrl: './empty-queue.component.html',
  styleUrls: ['./empty-queue.component.scss']
})
export class EmptyQueueComponent implements OnInit {

  private empty: boolean = true; 
  private queueChecker; 

  constructor(
    private _labQueue: LaboratoryQueueService, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.queueChecker = setInterval(()=>{
      this._labQueue.isEmpty().subscribe(
        (isEmpty) => {
          this.empty = isEmpty; 
        }
      )
    }, 10000); 
  }

  next(){
    this._labQueue.next().subscribe(
      (responce) => {
        this._router.navigate(['lab/requests/'+responce.id]);
      },
      (error) => {
        if(error.status == 406){
          this._router.navigate(['/lab/request/empty']); 
        }
      }
    ); 
  }

}
