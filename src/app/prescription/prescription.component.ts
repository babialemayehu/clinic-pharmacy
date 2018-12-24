import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../model/Patient';
import { PatientQueueService } from '../service/patient-queue.service';
import { User } from '../model/User';
import { MatDialog } from '@angular/material';
import { Patient_queue } from '../model/Patient_queue';
import { LaboratoryQueueService } from '../service/laboratory-queue.service';
import { PharmacyService } from '../service/pharmacy.service';
import { Prescription } from '../model/Prescription';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  private $requests: Prescription[] = []; 
  private $patient: Patient; 
  private $physician: User; 
  private $queue: Patient_queue; 
  private $profile_pic: string =  "assets/avatar.jpg"; 
  private loading: boolean = false; 
  private update = {
    onFinish: 0, 
    savedStates: 0, 
  }
  constructor(
    private _pharmacy: PharmacyService,
    private _activeRoute: ActivatedRoute, 
    private _queue: PatientQueueService, 
    private _labQueue: LaboratoryQueueService,  
    private _dialog: MatDialog, 
    private _router: Router) {  }

  ngOnInit() {   
    this._activeRoute.params.subscribe(
      (param) => {
        this._pharmacy.getRequests(param.queue_id).subscribe(
          requests => {
            this.$requests = requests; 
          }
        );
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

  submit(){
    this.loading = true; 
    this._pharmacy.deliver(this.$requests).subscribe(
      (response) => {
        this.loading = false; 
        this.update.onFinish++; 
        this.next(); 
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
        console.log(responce); 
        this.loading = false; 
        this._router.navigate(['/prescription/'+responce.id]);
        this.update.savedStates++; 
      }, 
      (error) => {
        if(error.status == 406){
          this._router.navigate(['/prescription/request/empty']); 
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
