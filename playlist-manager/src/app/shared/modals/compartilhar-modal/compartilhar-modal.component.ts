import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Setlist } from 'src/app/componentes/repertorios/interfaces/setlist.model';

@Component({
  selector: 'app-compartilhar-modal',
  templateUrl: './compartilhar-modal.component.html',
  styleUrls: ['./compartilhar-modal.component.css']
})
export class CompartilharModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CompartilharModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
