import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './cadastrar-integrante-modal.component.html',
  selector: 'app-cadastrar-integrante-modal',
  styleUrls: ['./cadastrar-integrante-modal.component.css']
})
export class CadastrarIntegranteModalComponent implements OnInit {

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<CadastrarIntegranteModalComponent>) { }
  
  participacoes = ["Violão", "Guitarra", "Baixo", "Bateria", "Teclado", "Vocal", "Percussão", "Piano", "Saxofone", 
  "Tropete", "Trobone", "Violino", "Violoncelo", "Cavaco", "Cajon", "Outro"];

  formNovoMembro = this.fb.group({
    nome: ['', Validators.required],
    email_membro: ['', [Validators.email, Validators.required]],
    participacao: ['', Validators.required],
    outro:''
  });

  ngOnInit() {

  }

  close(){
    this.dialogRef.close();
  }

  cadastrarIntegrante(){
   
    this.dialogRef.close(this.formNovoMembro.value);
  }


}
