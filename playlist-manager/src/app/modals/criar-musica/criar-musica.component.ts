import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA} from '@angular/cdk/keycodes';
import { FormBuilder, Validators } from '@angular/forms';
import { Musica } from 'src/app/interfaces/musica.model';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/interfaces/playlist.model';

@Component({
  selector: 'app-criar-musica',
  templateUrl: './criar-musica.component.html',
  styleUrls: ['./criar-musica.component.css']
})
export class CriarMusicaComponent implements OnInit {

  playListDoGrupo: Playlist;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [COMMA];
  tags = [];

  constructor(
    public dialogRef: MatDialogRef<CriarMusicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Musica,
    private fb: FormBuilder,
    private playlistService: PlaylistService) {}
    
  formNovaMusica = this.fb.group({
    id: '',
    nome: ['', Validators.required],
    artista: ['', Validators.required],
    ritmo: '',
    linkOuvir: [''],
    quantidadeVezesTocada: '',
    ultimaVezTocada: '',
    linkCifra: '',
    tags: ''
  });

  
  ngOnInit() {
    this.playListDoGrupo = JSON.parse(localStorage.getItem("playlist"));
  }

  close(){
    this.dialogRef.close();
  }

  save() {
    this.addSongToPlaylist();
    this.dialogRef.close();
  } 

  saveAndContinue(){
    this.addSongToPlaylist();
    this.formNovaMusica.reset();
  }

  addSongToPlaylist(){
    let musica = this.criarMusica();
    this.playListDoGrupo.musicas.push(musica);
    localStorage.setItem("playlist", JSON.stringify(this.playListDoGrupo));
    this.playlistService.addSongToPlaylist(this.playListDoGrupo).then(resAddSong => {
      console.log("musica adiciona a playlist ", musica);      
    });
  }

  criarMusica(){
    console.log("tags", this.tags)
    let novaMusica: Musica = {
      id: "musica",
      artista: this.formNovaMusica.value.artista,
      nome: this.formNovaMusica.value.nome,
      linkCifra: this.formNovaMusica.value.linkCifra,
      linkOuvir: this.formNovaMusica.value.linkOuvir,      
      ritmo: this.formNovaMusica.value.ritmo,
      tags: this.tags,
      quantidadeVezesTocada: 0,
      ultimaVezTocada: ''
    };
    return novaMusica;
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
