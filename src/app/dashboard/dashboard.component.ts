import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/Patient'; 
import { Patient_queue } from '../model/Patient_queue'; 
import { MatDialog, throwMatDuplicatedDrawerError } from '@angular/material'; 
import { PatientService } from '../service/patient.service'; 
import { Router, ActivatedRoute} from '@angular/router'; 
import { User } from '../model/User';
import { UserService } from '../service/user.service';
import { PharmacyQueueService } from '../service/pharmacy-queue.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private noSearch = true; 
  private patient: Patient; 
  private $queue: Patient_queue; 
  private isQueued: boolean; 
  private load: number = 0;
  private $auth: User;
  private loading: boolean = false; 

  constructor(
    private _queue: PharmacyQueueService,
    private _patient: PatientService, 
    private _router: Router, 
    private _activeRoute: ActivatedRoute,
    private _dialog: MatDialog,
    private _user: UserService) { }

  ngOnInit() {
    this.loading = true; 
    this._user.authUser().subscribe(
      (user) => {
        this.loading = false; 
        this.$auth = user; 
      }
    ); 
  }

  next(){
    this.loading = true; 
    this._queue.next().subscribe(
      (responce) => {
        this.loading = false; 
        this._router.navigate(['/prescription/'+responce.id]);
      },
      (error) => {
        if(error.status == 406){
          this._router.navigate(['/prescription/requests/empty']); 
        }
      }
    ); 
  }
}
