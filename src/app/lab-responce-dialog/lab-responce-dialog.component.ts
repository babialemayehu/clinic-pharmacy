import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lab-responce-dialog',
  templateUrl: './lab-responce-dialog.component.html',
  styleUrls: ['./lab-responce-dialog.component.scss']
})
export class LabResponceDialogComponent implements OnInit {

  private form: FormGroup; 

  constructor(
    private thisDialog: MatDialogRef<LabResponceDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) private data, 
    private _form: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this._form.group([

    ]); 
    console.log(this.data); 
  }

}
