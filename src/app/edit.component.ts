import { Component, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: "edit",
  template: `
    <div style="width:600px">
      <h2 mat-dialog-title>Dialog with Element</h2>
      <div mat-dialog-content>
      <form class="example-form">
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Name</mat-label>
          <input type="text" matInput >       
          
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Email</mat-label>
          <input type="email" matInput >       
          
        </mat-form-field>
        <mat-form-field class="example-full-width" appearance="fill">
          <mat-label>Address</mat-label>
          <input type="text" matInput >       
          
        </mat-form-field>
        <mat-radio-group aria-label="Select an option">
        <span class="genderLable">Gender</span>
          <mat-radio-button value="1">Male</mat-radio-button>
          <mat-radio-button value="2">Female</mat-radio-button>
        </mat-radio-group>

        


      </form>
      </div>
      
      <div mat-dialog-actions align="start">
      


        <span>
          <button class="yesbtn"
            type="button"
            mat-flat-button
            color="primary"
            [mat-dialog-close]="true"
          >
            Submit
          </button>
          <button class="nobtn"
            type="button"
            mat-stroked-button
            color="primary"
            (click)="CloseDialog()"
          >
            Close
          </button>
        </span>
      </div>
    </div>
  `
})
export class EditComponent {
  //name: any = "";
  constructor(
    private _mdr: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
   // this.name = data.name;
  }
  CloseDialog() {
    this._mdr.close(false)
  }
  
}


