import { Component } from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { HelloComponent } from "./hello.component";
import { EditComponent } from "./edit.component";
export interface PeriodicElement {
  name: string;
  email: string;
  gender: string;
  address: string;
  action:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Rakesh Roshan', email: 'example@gmail.com', gender: 'male', address: 'Pune,Maharastra' ,action:'e'},
    {name: 'Rakesh Roshan', email: 'example@gmail.com', gender: 'male', address: 'Pune,Maharastra' ,action:'e'},

  {name: 'Rakesh Roshan', email: 'example@gmail.com', gender: 'male', address: 'Pune,Maharastra' ,action:'e'},

  {name: 'Rakesh Roshan', email: 'example@gmail.com', gender: 'male', address: 'Pune,Maharastra' ,action:'e'},

  {name: 'Rakesh Roshan', email: 'example@gmail.com', gender: 'male', address: 'Pune,Maharastra' ,action:'e'},

  {name: 'Rakesh Roshan', email: 'example@gmail.com', gender: 'male', address: 'Pune,Maharastra' ,action:'e'},


];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  matDialogRef: MatDialogRef<HelloComponent>;
  name: string = "";
  constructor(private matDialog: MatDialog) {}
  OpenModal() {
    this.matDialogRef = this.matDialog.open(HelloComponent, {
      data: { name: this.name },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.name = "";
      }
    });
  }

  OpenEditModal() {
    this.matDialogRef = this.matDialog.open(EditComponent, {
      data: { name: this.name },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.name = "";
      }
    });
  }

  title = 'myproject';
  displayedColumns: string[] = ['name', 'email', 'gender', 'address' ,'action'];
  dataSource = ELEMENT_DATA;

}


