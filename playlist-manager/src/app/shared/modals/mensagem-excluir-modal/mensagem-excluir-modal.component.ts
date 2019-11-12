import { Component, OnInit, Inject } from '@angular/core';
import { Musica } from 'src/app/componentes/musicas/interfaces/musica.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

interface ModalData{
  obj: any;
  entidade: string;
}

@Component({
  selector: 'app-mensagem-excluir-modal',
  templateUrl: './mensagem-excluir-modal.component.html',
  styleUrls: ['./mensagem-excluir-modal.component.css']
})


export class MensagemExcluirModalComponent implements OnInit {  
  constructor(
    public dialogRef: MatDialogRef<MensagemExcluirModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData) { }

  ngOnInit() {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluir(){
    this.dialogRef.close(true);
  }

}
