import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Laboratory } from '../model/Laboratory';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Prescription } from '../model/Prescription';

@Component({
  selector: 'app-prescription-table',
  templateUrl: './prescription-table.component.html',
  styleUrls: ['./prescription-table.component.scss']
})
export class PrescriptionTableComponent implements OnInit {

  private testDataSource: MatTableDataSource<Prescription> = new MatTableDataSource<Prescription>(); 
  private displayedColumns = ['deliverd', "no", "name","dose", "root", "frequency"]; 
  constructor() { }

  @Input() requests: Prescription[] = [];
  @Output() rowClick: EventEmitter<any> = new EventEmitter(); 
  @Output() update: EventEmitter<Prescription[]> = new EventEmitter(); 
  ngOnChanges(){
    this.updateTable(); 
  }
  ngOnInit() {
  }

  updateTable(){
    this.testDataSource.data = this.requests; 
    this.update.emit(this.requests); 
  }
  onRowClick(row){
    //this.rowClick.emit(row); 
  }

  submit(){
    
  }


  select(i, e){
    this.requests[i].isDeliverd = e.checked; 
    this.updateTable(); 
  }

}
