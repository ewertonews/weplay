import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Grupo } from '../../interfaces/grupo.model';

@Component({
  selector: 'app-criar-grupo',
  templateUrl: './criar-grupo-modal.component.html',
  styleUrls: ['./criar-grupo-modal.component.css']
})
export class CriarGrupoModalComponent implements OnInit {

  participacoes = ["Violão", "Guitarra", "Baixo", "Bateria", "Teclado", "Vocal", "Percussão", "Piano", "Saxofone", 
  "Tropete", "Trobone", "Violino", "Violoncelo", "Cavaco", "Cajon", "Outro"];

  constructor(
    public dialogRef: MatDialogRef<CriarGrupoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Grupo,
    private fb: FormBuilder) {}

  formNovoGrupo = this.fb.group({
    nome: ['', Validators.required],
    participacao: ['', Validators.required],
    outro:''
  });
    
  ngOnInit() {

  }

  close(){
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close(this.formNovoGrupo.value);
  } 

  getFotoRef(event){
    console.log(event.target.files[0]);
  }


  

}
