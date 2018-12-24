import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Laboratory } from '../model/Laboratory';
import { MatTable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lab-requests-table',
  templateUrl: './lab-requests-table.component.html',
  styleUrls: ['./lab-requests-table.component.scss']
})
export class LabRequestsTableComponent implements OnInit {

  private testDataSource: MatTableDataSource<Laboratory> = new MatTableDataSource<Laboratory>(); 
  private displayedColumns = ["no", "name","normality", "value", "note"]; 

  constructor() { }

  @Input() requests: Laboratory[] = [];
  @Output() rowClick: EventEmitter<any> = new EventEmitter(); 
  @Output() update: EventEmitter<Laboratory[]> = new EventEmitter(); 
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

  changeNormality(index, normality: boolean){
    this.requests[index].normality = normality; 
    this.updateTable(); 
  }

  changeValue(index, e){
    this.requests[index].value = e.target.value; 
    this.updateTable(); 
  }


  changeNote(index, e){
    this.requests[index].note = e.target.value; 
    this.updateTable(); 
  }

}
