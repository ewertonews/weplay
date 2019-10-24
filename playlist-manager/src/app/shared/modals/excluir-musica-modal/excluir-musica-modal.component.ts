import { Component, OnInit, Inject } from '@angular/core';
import { Musica } from 'src/app/componentes/musicas/interfaces/musica.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-excluir-musica-modal',
  templateUrl: './excluir-musica-modal.component.html',
  styleUrls: ['./excluir-musica-modal.component.css']
})
export class ExcluirMusicaModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ExcluirMusicaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Musica) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluir(){
    this.dialogRef.close(true);
  }

}
