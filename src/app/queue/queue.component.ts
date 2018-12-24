import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { QueueDataSource } from './queue-datasource';
import { LaboratoryQueueService } from '../service/laboratory-queue.service'; 
import { Patient_queue } from '../model/Patient_queue'; 

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: QueueDataSource;

  displayedColumns = ['reg_id', 'name', 'humanWaitingTime'];

  constructor(private _queue: LaboratoryQueueService){}

  ngOnInit() {
    this.dataSource = new QueueDataSource(this.paginator, this.sort, []);

    this._queue.queue_list().subscribe(
      (responce) => {
        this.dataSource = new QueueDataSource(this.paginator, this.sort, responce); 
      }
    )
  }
}
