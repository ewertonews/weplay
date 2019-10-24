import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormBuilder, Validators } from '@angular/forms';
import { Musica } from 'src/app/componentes/musicas/interfaces/musica.model';
import { PlaylistService } from 'src/app/componentes/repertorios/services/playlist.service';
import { Playlist } from 'src/app/componentes/repertorios/interfaces/playlist.model';
import { MusicasService } from 'src/app/componentes/musicas/services/musicas.service';
import { Grupo } from 'src/app/componentes/grupo/interfaces/grupo.model';
import { replaceAll } from 'src/app/shared/GLOBAL_FUNCTIONS';

@Component({
  selector: 'app-criar-musica',
  templateUrl: './criar-musica.component.html',
  styleUrls: ['./criar-musica.component.css']
})
export class CriarMusicaComponent implements OnInit {

  playListDoGrupo: Playlist;
  grupo: Grupo;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [COMMA, ENTER];
  tags = [];

  constructor(
    public dialogRef: MatDialogRef<CriarMusicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Musica,
    private fb: FormBuilder,
    private playlistService: PlaylistService,
    private musicaService: MusicasService) {}
    
  formNovaMusica = this.fb.group({
    id: '',
    nome: ['', Validators.required],
    artista: ['', Validators.required],
    ritmo: '',
    linkOuvir: [''],
    quantidadeVezesTocada: 0,
    ultimaVezTocada: '',
    linkCifra: '',
    tags: ''
  });

  
  ngOnInit() {
    this.playListDoGrupo = JSON.parse(localStorage.getItem("playlist"));
    this.grupo = JSON.parse(localStorage.getItem("grupo"));
  }

  close(){
    this.dialogRef.close();
  }

  save() {
    if(this.addSongToPlaylist()){
      this.dialogRef.close();
    }     
  } 

  saveAndContinue(){
    if(this.addSongToPlaylist()){
      this.formNovaMusica.reset();
    }    
  }

  //mover esse metodo para componente musicas
  addSongToPlaylist(){
    let tudocerto = true;
    let musica = this.criarMusica();
    if(!musica){
      alert("Esta música já está cadastrada!");
      return false;
    }else{
      localStorage.setItem("playlist", JSON.stringify(this.playListDoGrupo));
      this.playlistService.addSongToPlaylist(musica, this.grupo).then(resAddSong => {
        console.log("musica adiciona a playlist ");           
      });
      return tudocerto;    
    }
    
  }

  criarMusica(){
    console.log("tags", this.tags)
    let nomeMusica = this.formNovaMusica.value.nome.trim();

    let nomesMusicas = this.playListDoGrupo.musicas.map(m => m.nome.trim());

    if (nomesMusicas.includes(nomeMusica)){
      return null;
    }

    let novaMusica: Musica = {
      id: this.generateMusicId(this.formNovaMusica.value.nome),
      artista: this.formNovaMusica.value.artista,
      nome: this.formNovaMusica.value.nome,
      linkCifra: this.formNovaMusica.value.linkCifra,
      linkOuvir: this.formNovaMusica.value.linkOuvir,      
      ritmo: this.formNovaMusica.value.ritmo,
      tags: this.tags.join(", "),
      quantidadeVezesTocada: this.formNovaMusica.value.quantidadeVezesTocada,
      ultimaVezTocada: this.formNovaMusica.value.ultimaVezTocada
    };
    this.playListDoGrupo.musicas.push(novaMusica);    
    return novaMusica;
  }


  generateMusicId(nomeMusica){
    return replaceAll(nomeMusica.toLowerCase(), " ", "_") + "_" + this.grupo.id;    
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
