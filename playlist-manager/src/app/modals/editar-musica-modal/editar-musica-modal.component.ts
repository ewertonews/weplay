import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { Musica } from 'src/app/interfaces/musica.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  selector: 'app-editar-musica-modal',
  templateUrl: './editar-musica-modal.component.html',
  styleUrls: ['./editar-musica-modal.component.css']
})
export class EditarMusicaModalComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [COMMA, ENTER];
  tags = [];
  formEditarMusica: FormGroup;
  constructor(public dialogRef: MatDialogRef<EditarMusicaModalComponent>,
              @Inject(MAT_DIALOG_DATA) public musica: Musica,
              private fb: FormBuilder) { }

  
  
  
  ngOnInit() {
    this.tags = this.musica.tags.split(",");

    this.formEditarMusica = this.fb.group({
      id: this.musica.id,
      nome: [this.musica.nome, Validators.required],
      artista: [this.musica.artista, Validators.required],
      ritmo: this.musica.ritmo,
      linkOuvir: [this.musica.linkOuvir],
      quantidadeVezesTocada: this.musica.quantidadeVezesTocada,
      ultimaVezTocada: this.musica.ultimaVezTocada,
      linkCifra: this.musica.linkCifra,
      tags: ['']
    });

    this.formEditarMusica.valueChanges.subscribe(console.log);
  }

  onCancelar(){
    this.dialogRef.close();
  }

  salvar(){
    //this.formEditarMusica.setValue({tags: this.tags.join(", ")});
    this.dialogRef.close(this.formEditarMusica.value);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}
