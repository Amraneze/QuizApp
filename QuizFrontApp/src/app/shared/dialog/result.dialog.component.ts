import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from "@angular/router";

@Component({
  selector: 'app-result.dialog',
  templateUrl: './result.dialog.component.html',
  styleUrls: ['./result.dialog.component.css']
})
export class ResultDialogComponent {

  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  dismissDialog(): void {
    this.dialogRef.close();
    this.router.navigate(['/']);
  }
}
