import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Grupo } from 'src/app/interfaces/grupo.model';
import { Usuario } from 'src/app/interfaces/usuario.model';
import { PlaylistService } from 'src/app/services/playlist.service';
import { Playlist } from 'src/app/interfaces/playlist.model';
import { MusicasComponent } from '../musicas/musicas.component';
import { Musica } from 'src/app/interfaces/musica.model';
import { MusicasGrupo } from 'src/app/interfaces/musicasGrupos';
import { MusicasService } from 'src/app/services/musicas.service';
import { GruposService } from 'src/app/services/grupos.service';
import { UsuarioGrupo } from 'src/app/interfaces/usuarioGrupo.model';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  grupo: Grupo;
  currentUser: Usuario;
  playlistDoGrupo: Playlist;
  tabSelecionada = 0;
  qtdMusicas;
  usuariosDoGrupo: Usuario[];
  musicasParaRepertorio: Musica[] = [];
  qtsSetlists: number;
  clearSelection = false;

  constructor(
    private playlistService: PlaylistService,
    private gruposService: GruposService) { 
    this.currentUser = JSON.parse(localStorage.getItem('usuarioRP'));
    console.log("currentUser", this.currentUser);
  }

  ngOnInit() {    
    let grupoSelecionado = localStorage.getItem("grupo");
    console.log('grupo selec', grupoSelecionado);
    if (grupoSelecionado){
      this.grupo = JSON.parse(grupoSelecionado);
    }
   
    this.playlistService.getGroupSongs(this.grupo)
      .subscribe(resp => {
        console.log("getPlaylist 2", resp);

        let retornoMusicas = resp.map(obj => {
          let musicaGrupo = obj as MusicasGrupo;
          return musicaGrupo.musica;
        } );

        this.playlistDoGrupo = {
          idGrupo: this.grupo.id,
          musicas: retornoMusicas
        };

        this.qtdMusicas = this.playlistDoGrupo.musicas.length;
        localStorage.setItem("playlist", JSON.stringify(this.playlistDoGrupo));
        console.log("PlaylistDoGrupo ", this.playlistDoGrupo);
      });

    this.gruposService.getGroupUsers(this.grupo.id).subscribe(grupo => {
      let grupoUsuario = grupo as UsuarioGrupo;
      this.usuariosDoGrupo = grupoUsuario.usuarios;
    });
  }

  
  receiveMusicasSelecionadas($event) {
    console.log("recebeu o evento");
    // let ehEditSetlist = localStorage.getItem("editlist");
    // if(ehEditSetlist){

    // }
    // $event.forEach(musica => {
    //   if(!this.musicasParaRepertorio.includes(musica)){
    //     this.musicasParaRepertorio.push(musica);
    //   }        
    // });
    this.musicasParaRepertorio = $event;
    console.log("musicasParaRepertorio", this.musicasParaRepertorio);
    if(localStorage.getItem("tab")){
      let tabRep = document.getElementById('mat-tab-label-0-1') as HTMLElement;
      tabRep.click();
      localStorage.removeItem("tab");
    }
    
  }

  qtdGroupSetListsEvent($event){
    this.qtsSetlists = $event;
  }

  limparSelecao(event){
    console.log("limpar selecao", event);
    this.clearSelection = event;
  }

}
