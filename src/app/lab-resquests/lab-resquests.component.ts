import { Component, OnInit } from '@angular/core';
import { LaboratoryService } from '../service/laboratory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Laboratory } from '../model/Laboratory';
import { Patient } from '../model/Patient';
import { PatientQueueService } from '../service/patient-queue.service';
import { User } from '../model/User';
import { MatDialog } from '@angular/material';
import { LabResponceDialogComponent } from '../lab-responce-dialog/lab-responce-dialog.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Patient_queue } from '../model/Patient_queue';
import { DashboardComponent } from '../dashboard/dashboard.component'; 
import { LaboratoryQueueService } from '../service/laboratory-queue.service';

@Component({
  selector: 'app-lab-resquests',
  templateUrl: './lab-resquests.component.html',
  styleUrls: ['./lab-resquests.component.scss']
})
export class LabResquestsComponent implements OnInit {

  private $requests: Laboratory[] = []; 
  private $patient: Patient; 
  private $physician: User; 
  private $queue: Patient_queue; 
  private $profile_pic: string =  "assets/avatar.jpg"; 
  private form: FormGroup; 
  private loading: boolean = false; 
  private update = {
    onFinish: 0, 
    savedStates: 0, 
  }
  constructor(
    private _laboratory: LaboratoryService,
    private _activeRoute: ActivatedRoute, 
    private _queue: PatientQueueService, 
    private _labQueue: LaboratoryQueueService,  
    private _dialog: MatDialog, 
    private _form: FormBuilder, 
    private _router: Router) { 
      this.form = this._form.group({
        id:[],
        laboratory_test_id:[], 
        laboratory_test: [], 
        normality: [], 
        note: [],
        value:[], 
        hisstory_id:[], 
      }); 
    }

  ngOnInit() {
    this._activeRoute.params.subscribe(
      (param) => {
        this._laboratory.getRequests(param.queue_id).subscribe(
          (requests) => {
            this.$requests = requests;  
            this.form.patchValue(this.$requests); 
          }
        )
        this._queue.getQueue(param.queue_id).subscribe(
          (queue) => {
            this.$queue = queue; 
            this.$patient = queue.patient; 
            this.$physician = queue.physician; 
            this.$profile_pic = "http://clinic/storage/"+queue.physician.profile_pic; 
          }
        )
      }
    )
  }

  respondDialog(request){
    let dialogRef  = this._dialog.open(LabResponceDialogComponent, {
      width: '600px', 
      data: {
        request: request
      }
    }); 

    dialogRef.afterClosed().subscribe(
      response => {

      }
    )
  }

  submit(){
    this._laboratory.respond(this.$requests[0].hisstory_id, this.$requests ).subscribe(
      (response) => {
        this.update.onFinish++; 
      }
    )
  }

  call(){
    this._queue.call(this.$queue.id).subscribe(
      (Response) => {}
    )
  }

  next(){
    this.loading = true; 
    this._labQueue.next().subscribe(
      (responce) => {
        this.loading = false; 
        this._router.navigate(['lab/requests/'+responce.id]);
        this.update.savedStates++; 
      }, 
      (error) => {
        if(error.status == 406){
          this._router.navigate(['/lab/request/empty']); 
        }
      }
    ); 
  }

  floatingActionButton(action){
    switch(action){
      case 1: 
        this.next(); 
      break; 
      case 4: 
        this.call();  
      break; 
    }
  }
}
