import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Patient } from '../model/Patient';
import { Patient_queue } from '../model/Patient_queue'; 

@Injectable({
  providedIn: 'root'
})
export class LaboratoryQueueService {

  constructor(public _http: HttpClient) { }

  private root = "http://clinic"; 

  queue_list(limit = -1): Observable<Patient_queue[]>{
    const URL = this.root+"/ajax/get/lab/queue/list/"+limit;
    return this._http.get<Patient_queue[]>(URL); 
  }

  next():Observable<Patient_queue>{
    const URL = this.root+"/ajax/get/lab/queue/next"; 
    return this._http.get<Patient_queue>(URL); 
  }

  saved(): Observable<Patient_queue[]>{
    const URL = this.root+"/ajax/get/lab/queue/saved";
    return this._http.get<Patient_queue[]>(URL); 
  }

  isEmpty(): Observable<boolean>{
    const URL = this.root + "/ajax/get/lab/queue/is empty"; 
    return this._http.get<boolean>(URL); 
  }
}
