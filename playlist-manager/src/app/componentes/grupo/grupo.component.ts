import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Grupo } from 'src/app/componentes/grupo/interfaces/grupo.model';
import { Usuario } from 'src/app/componentes/usuario/interfaces/usuario.model';
import { PlaylistService } from 'src/app/componentes/repertorios/services/playlist.service';
import { Playlist } from 'src/app/componentes/repertorios/interfaces/playlist.model';
import { MusicasComponent } from '../musicas/musicas.component';
import { Musica } from 'src/app/componentes/musicas/interfaces/musica.model';
import { MusicasGrupo } from 'src/app/componentes/musicas/interfaces/musicasGrupos';
import { MusicasService } from 'src/app/componentes/musicas/services/musicas.service';
import { GruposService } from 'src/app/componentes/grupo/services/grupos.service';
import { UsuarioGrupo } from 'src/app/componentes/usuario/interfaces/usuarioGrupo.model';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CadastrarIntegranteModalComponent } from './modals/cadastrar-integrante-modal/cadastrar-integrante-modal.component';
import { Convite } from './interfaces/convite.model';
import { ConviteService } from './services/convite.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {

  grupo: Grupo;
  currentUser: Usuario;
  playlistDoGrupo: Playlist;
  tabSelecionada = 0;
  qtdMusicas;
  usuariosDoGrupo: Usuario[];
  musicasParaRepertorio: Musica[] = [];
  qtsSetlists: number;
  clearSelection = false;
  isAdmin = false;
  
  constructor(
    private playlistService: PlaylistService,
    private gruposService: GruposService,
    private conviteService: ConviteService,
    private modalDialog: MatDialog) { 
    this.currentUser = JSON.parse(localStorage.getItem('usuarioRP'));
    console.log("currentUser", this.currentUser);
  }

  ngOnInit() {    
    let grupoSelecionado = localStorage.getItem("grupo");
    // console.log('grupo selec', grupoSelecionado);
    if (grupoSelecionado){
      this.grupo = JSON.parse(grupoSelecionado);
    }
   
    this.playlistService.getGroupSongs(this.grupo)
      .subscribe(resp => {
        // console.log("getPlaylist 2", resp);

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

    this.isAdmin = this.verifyIfUserIsAdmin(this.grupo, this.currentUser);
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

  openCadastrarIntegranteModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.width = "70%";
    dialogConfig.height = "45%";
    let criarMusicadialogRef = this.modalDialog.open(CadastrarIntegranteModalComponent, dialogConfig);

    criarMusicadialogRef.afterClosed().subscribe(data => {
      if (data){
        this.convidarNovoIntegrante(data);
      }
    });
  }

  convidarNovoIntegrante(novoIntegrante: any){
    let papelNoGrupo = novoIntegrante.outro === "" ? novoIntegrante.participacao : novoIntegrante.outro;
    let novoMembro: Convite = {
      id: this.grupo.id + "_" + novoIntegrante.email_membro,
      convidadoPor: this.currentUser.nome,
      email: novoIntegrante.email_membro,
      nomeGrupo: this.grupo.nome,
      idGrupo: this.grupo.id,
      nome: novoIntegrante.nome,
      papel: papelNoGrupo,
      status: "pendente",
      dataConvite: new Date().toLocaleDateString()
    };

    this.conviteService.createConvite(novoMembro).then(res => {
      console.log(res);
      alert("Convite criado com sucesso");
    }).catch(error => {
      alert(error || error.message);
      
    });
  }

  qtdGroupSetListsEvent($event){
    this.qtsSetlists = $event;
  }

  limparSelecao(event){
    console.log("limpar selecao", event);
    this.clearSelection = event;
  }

  verifyIfUserIsAdmin(grupo: Grupo, usuario: Usuario){
    return grupo.emailAdmins.includes(usuario.email);
  }

}
