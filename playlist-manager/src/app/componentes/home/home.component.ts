import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../autenticacao/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario/interfaces/usuario.model';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CriarGrupoModalComponent } from '../grupo/modals/criar-grupo/criar-grupo-modal.component';
import { Grupo } from '../grupo/interfaces/grupo.model';
import { UsuariosService } from '../usuario/services/usuarios.service';
import { GruposService } from '../grupo/services/grupos.service';
import { PlaylistService } from '../repertorios/services/playlist.service';
import { ConviteService } from '../grupo/services/convite.service';
import { Convite } from '../grupo/interfaces/convite.model';
import { ConfirmacaoModalComponent } from '../../shared/modals/confirmacao-modal/confirmacao-modal.component';
import { Admin } from '../grupo/interfaces/admin.model';
import { Membro } from '../grupo/interfaces/membro.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;
  gruposDoUsuario: Array<Grupo> = [];
  showSpinner = true;
  convitesUsuario: Convite[];

  constructor(
    private auth: AuthService, 
    private router: Router,
    private matDialog: MatDialog,
    private userService: UsuariosService,
    private grupoService: GruposService,
    private playListService: PlaylistService,
    private conviteService: ConviteService) {
   }

  ngOnInit() {
    if(!this.auth.authenticated) {
      this.router.navigate(['']);
    }
    this.setUsuario();  
  }


  private setUsuario() {
    let usuarioRP = localStorage.getItem("usuarioRP");
    if (usuarioRP) {
      this.usuario = JSON.parse(usuarioRP);
      this.obterGruposDoUsuario(this.usuario.email);
      this.obterConvitesUsuario(this.usuario.email);
    }
    else {
      this.criarOuAtualizarUsuario();
    }
  }

  openDialog() {
    console.log("Chamou o open dialog")
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.maxWidth = "100%";
    dialogConfig.minWidth = "70%";

    const dialogRef = this.matDialog.open(CriarGrupoModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data =>{
        console.log("Dialog output:", data);
        if (data) {
          this.criarGrupo(data);
        }
      }      
    );
  }

  criarOuAtualizarUsuario() {
    const loggedUser = JSON.parse(localStorage.getItem("usuario"));
    console.log("loggedUser", loggedUser);

    let tipoLogin = localStorage.getItem("tipoLogin");
    let fotoUrl = loggedUser.user.photoURL;
    
    if (tipoLogin === "facebook"){
          fotoUrl = fotoUrl + "?type=large";
    }
    
    this.usuario = {
          id: loggedUser.user.uid,
          email: loggedUser.user.email,
          urlFoto: fotoUrl,
          nome: loggedUser.user.displayName,
          idGrupos: [],
          atuacao: null,
          sexo: null,
          telefone: null
    };

    this.obterGruposDoUsuario(this.usuario.email);
    this.obterConvitesUsuario(this.usuario.email);

    this.userService.getUserByEmail(loggedUser.user.email).subscribe(respUserQuery => {
      if (respUserQuery.length === 0){
        this.showSpinner = false;
        this.userService.createUser(this.usuario);    
        console.log("usuario criado", this.usuario);        
      } else {
        let userFromDB = respUserQuery[0] as Usuario;
        this.usuario.idGrupos = userFromDB.idGrupos;
        this.usuario.sexo = userFromDB.sexo;
        this.usuario.atuacao = userFromDB.atuacao;
      }
      localStorage.setItem("usuarioRP", JSON.stringify(this.usuario));
      localStorage.removeItem("usuario");
    });   
    
  }

  criarGrupo(data){
    let grupo = new Grupo();    
    grupo.id = this.generateIdGrupo().toString();
    grupo.nome = data.nome;
    grupo.criadoEm = new Date().toLocaleDateString();
    this.usuario.idGrupos.push(grupo.id);
    grupo.emailMembros = [this.usuario.email];
    grupo.membros = [
      { 
        nome: this.usuario.nome, 
        email: this.usuario.email, 
        atuacao: data.participacao
      }];
    grupo.admins = [{ nome: this.usuario.nome, email: this.usuario.email}];
    grupo.foto = "https://via.placeholder.com/300x200?text=Foto+do+grupo+aqui"
    console.log("grupo criado: ",grupo);

    this.gruposDoUsuario.push(grupo);

    this.grupoService.createGroup(grupo).then(res => {
      console.log('RESPOSTA CRIAÇÃO GRUPO: ', res);
      this.grupoService.associateUserToGroup(grupo.id, this.usuario);
    });

    console.log("grupos do usuario: ", this.gruposDoUsuario);    
  }

  pedirConfirmacaoAceitarConvite(convite: Convite){
  
    const dialogRef = this.matDialog.open(ConfirmacaoModalComponent, {
      minWidth: '70%',
      data: {mensagem: `Confirma tua participação no ${convite.nomeGrupo}?`}
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res){
        //add usuario
        console.log("convite eceito!");
        this.showSpinner = true;
        this.grupoService.associateUserToGroup(convite.idGrupo, this.usuario).then(resp => {
          this.convitesUsuario.splice(this.convitesUsuario.indexOf(convite), 1);
          console.log("resp", resp);
          this.showSpinner = false;
        });
        console.log("Convites do caba:", this.convitesUsuario);
      }
    });
  }

  pedirConfirmacaoRecusarConvite(convite: Convite){
    const dialogRef = this.matDialog.open(ConfirmacaoModalComponent, {
      minWidth: '70%',
      data: {mensagem: `Tem certeza que deseja rejeitar o convite para participar do ${convite.nomeGrupo}?`}
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res){
        //remover convite
        console.log("convite rejeitado!")
      }
    });
  }

  generateIdGrupo(){
    let hoje = new Date();
    return "G" + hoje.getMilliseconds() + hoje.getSeconds() + hoje.getDate() + hoje.getMonth() + hoje.getFullYear();
  }
  
  async obterGruposDoUsuario(email){
    this.showSpinner = true;
    this.grupoService.getUserGroups(email).subscribe(grupos => {          
      if(grupos.length > 0){
        this.gruposDoUsuario = grupos as Grupo[];        
      }
      this.showSpinner = false;
      console.log("grupos do caba:", this.gruposDoUsuario);
    });
  }

  async obterConvitesUsuario(email){
    this.showSpinner = true;
    this.conviteService.getConvitesUsuario(email).subscribe(convites => {
      if(convites.length > 0){
        this.convitesUsuario = convites as Convite[];        
      }      
      console.log("convites do caba:", this.convitesUsuario);
      this.showSpinner = false;
    });
  }
}
