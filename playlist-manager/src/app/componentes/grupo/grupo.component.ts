import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PlaylistService } from '../repertorios/services/playlist.service';
import { Playlist } from '../repertorios/interfaces/playlist.model';
import { MusicasComponent } from '../musicas/musicas.component';
import { Musica } from '../musicas/interfaces/musica.model';
import { MusicasGrupo } from '../musicas/interfaces/musicasGrupos';
import { MusicasService } from '../musicas/services/musicas.service';
import { GruposService } from '../grupo/services/grupos.service';
import { UsuarioGrupo } from '../usuario/interfaces/usuarioGrupo.model';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { CadastrarIntegranteModalComponent } from './modals/cadastrar-integrante-modal/cadastrar-integrante-modal.component';
import { Convite } from './interfaces/convite.model';
import { ConviteService } from './services/convite.service';
import { Grupo } from './interfaces/grupo.model';
import { Usuario } from '../usuario/interfaces/usuario.model';

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
    let atuacaoNoGrupo = novoIntegrante.outro === "" ? novoIntegrante.participacao : novoIntegrante.outro;
    let novoMembro: Convite = {
      id: this.grupo.id + "_" + novoIntegrante.email_membro,
      convidadoPor: this.currentUser.nome,
      email: novoIntegrante.email_membro,
      nomeGrupo: this.grupo.nome,
      idGrupo: this.grupo.id,
      nome: novoIntegrante.nome,
      atuacao: atuacaoNoGrupo,
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
    var oldAdminCheck = false;  
    if (grupo.emailAdmins != undefined){
      oldAdminCheck = grupo.emailAdmins.includes(usuario.email);
    }    
    var newAdminCheck = false;
    if (grupo.admins !== undefined){
      newAdminCheck = grupo.admins.some(adm => adm.email == usuario.email);
    }    
    console.log("OldAdminCheck: ", oldAdminCheck);
    console.log("NewAdminCheck: ", newAdminCheck);
    
    return oldAdminCheck || newAdminCheck;
  }

}
