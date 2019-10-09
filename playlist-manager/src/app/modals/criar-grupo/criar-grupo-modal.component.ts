import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grupo } from 'src/app/interfaces/grupo.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-grupo',
  templateUrl: './criar-grupo-modal.component.html',
  styleUrls: ['./criar-grupo-modal.component.css']
})
export class CriarGrupoModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CriarGrupoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Grupo,
    private fb: FormBuilder) {}

  formNovoGrupo = this.fb.group({
    nome: '',
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
