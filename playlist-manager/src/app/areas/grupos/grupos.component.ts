import { Component, OnInit } from '@angular/core';
import { Grupo } from 'src/app/interfaces/grupo.model';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/interfaces/playlist.model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  grupo: Grupo;
  currentUser: Usuario;
  playlistDoGrupo: Playlist;

  constructor(private playlistService: PlaylistService) { 
    this.currentUser = JSON.parse(localStorage.getItem('usuarioRP'));
    console.log("currentUser", this.currentUser);
  }

  ngOnInit() {
    let grupoSelecionado = localStorage.getItem("grupo");
    console.log('grupo selec', grupoSelecionado);
    if (grupoSelecionado){
      this.grupo = JSON.parse(grupoSelecionado);
    }

    this.playlistService.getPlayList(this.grupo.id).subscribe(res => {
      //console.log('getPlaylist: ', res.data);
      this.playlistDoGrupo = res.data() as Playlist;
      localStorage.setItem("playlist", JSON.stringify(this.playlistDoGrupo));
      console.log("PlaylistDoGrupo ", this.playlistDoGrupo);
    });
  }

}
