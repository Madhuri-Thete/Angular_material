import { Component, Input, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "hello",
  template: `
    <div style="width:400px">
      <h2 mat-dialog-title>Delete User</h2>
      <div mat-dialog-content>Are you sure you want to delete "Rakesh Roshan"?</div>
      <div mat-dialog-actions align="start">
        <span>
          <button class="yesbtn"
            type="button"
            mat-flat-button
            color="primary"
            [mat-dialog-close]="true"
          >
            Yes
          </button>
          <button class="nobtn"
            type="button"
            mat-stroked-button
            color="primary"
            (click)="CloseDialog()"
          >
            No
          </button>
        </span>
      </div>
    </div>
  `
})
export class HelloComponent {
  //name: string;
  constructor(
    private _mdr: MatDialogRef<HelloComponent>,
    @Inject(MAT_DIALOG_DATA) data: string
  ) {
    //this.name = data.name;
  }
  CloseDialog() {
    this._mdr.close(false)
  }
}
