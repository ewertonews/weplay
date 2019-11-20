import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmacao-modal',
  templateUrl: './confirmacao-modal.component.html',
  styleUrls: ['./confirmacao-modal.component.css']
})
export class ConfirmacaoModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmacaoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(){
    this.dialogRef.close(true);
  }

  ngOnInit() {
  }

}
