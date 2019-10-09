import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';
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

  constructor(
    public dialogRef: MatDialogRef<CriarMusicaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Musica,
    private fb: FormBuilder,
    private playlistService: PlaylistService) {}
    
  formNovaMusica = this.fb.group({
    id: '',
    nome: '',
    artista: '',
    ritmo: '',
    linkVideo: '',
    linkSpotify: '',
    linkDeezer: '',
    linkCifra: '',
    tags:''
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
      console.log("musica adiciona a playlist ", resAddSong);      
    });
  }

  criarMusica(){
    let novaMusica: Musica = {
      id: "musica",
      artista: this.formNovaMusica.value.artista,
      nome: this.formNovaMusica.value.nome,
      linkCifra: this.formNovaMusica.value.linkCifra,
      linkVideo: this.formNovaMusica.value.linkVideo,
      linkSpotify: this.formNovaMusica.value.linkSpotify,
      linkDeezer: this.formNovaMusica.value.linkDeezer,
      ritmo: this.formNovaMusica.value.ritmo,
      tags: this.formNovaMusica.value.tags,
      quantidadeVezesTocada: 0,
      ultimaVezTocada: ''
    };
    return novaMusica;
  }

}
