import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-datatable-detalis',
  templateUrl: './datatable-detalis.component.html',
  styleUrls: ['./datatable-detalis.component.scss']
})
export class DatatableDetalisComponent {
  constructor( public dialogRef: MatDialogRef<DatatableDetalisComponent>){

  }
  Cancel(): void {
    this.dialogRef.close();
  }
}
