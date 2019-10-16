import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario.model';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CriarGrupoModalComponent } from 'src/app/modals/criar-grupo/criar-grupo-modal.component';
import { Grupo } from 'src/app/interfaces/grupo.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { GruposService } from 'src/app/services/grupos.service';
import { PlaylistService } from 'src/app/services/playlist.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario;
  gruposDoUsuario: Array<Grupo> = [];
  showSpinner = true;

  constructor(
    private auth: AuthService, 
    private router: Router,
    private dialogGrupo: MatDialog,
    private userService: UsuariosService,
    private grupoService: GruposService,
    private playListService: PlaylistService) {
    

   }

  ngOnInit() {
    if(!this.auth.authenticated) {
      this.router.navigate(['']);
    }

    let usuarioRP = localStorage.getItem("usuarioRP");
    if (usuarioRP){
      this.usuario = JSON.parse(usuarioRP);
      this.obterGruposDoUsuario();
    }else{
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

    const dialogRef = this.dialogGrupo.open(CriarGrupoModalComponent, dialogConfig);

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
          papel: null,
          sexo: null,
          telefone: null
    };

    this.userService.getUserByEmail(loggedUser.user.email).subscribe(respUserQuery => {
      if (respUserQuery.length === 0){
        this.showSpinner = false;
        this.userService.createUser(this.usuario);    
        console.log("usuario criado", this.usuario);        
      } else {
        let userFromDB = respUserQuery[0] as Usuario;
        this.usuario.idGrupos = userFromDB.idGrupos;
        this.usuario.sexo = userFromDB.sexo;
        this.usuario.papel = userFromDB.papel;
      }
      localStorage.setItem("usuarioRP", JSON.stringify(this.usuario));

      this.obterGruposDoUsuario();
    });   
    
  }

  criarGrupo(data){
    let grupo = new Grupo();    
    grupo.id = this.generateIdGrupo();
    grupo.nome = data.nome;
    grupo.criadoEm = new Date().toLocaleDateString();
    this.usuario.idGrupos.push(grupo.id);
    grupo.emailMembros = [this.usuario.email];
    grupo.emailAdmins = [this.usuario.email];
    grupo.foto = "https://via.placeholder.com/300x200?text=Foto+do+grupo+aqui"
    console.log("grupo criado: ",grupo);

    this.gruposDoUsuario.push(grupo);

    this.grupoService.createGroup(grupo).then(res => {
      console.log('RESPOSTA CRIAÇÃO GRUPO: ', res);
      this.grupoService.associateUserToGroup(grupo.id, this.usuario);
    });

    this.playListService.createPlaylist(grupo).then(res => {
      console.log("PLAYLIST CRIADA");
    }, error => {
      console.error("OCORREU UM ERRO NA CRIAÇÂO DA PLAYLIST");      
    });

    console.log("grupos do usuario: ", this.gruposDoUsuario);

    
  }

  generateIdGrupo(){
    let hoje = new Date();
    return Math.random().toString(36).substring(2) + "_" 
    + hoje.getDate() + hoje.getMonth() + hoje.getFullYear()
    + hoje.getSeconds() + hoje.getMilliseconds();
  }
  
  obterGruposDoUsuario(){
    this.grupoService.getUserGroups(this.usuario.email).subscribe(grupos => {          
      if(grupos.length > 0){
        this.gruposDoUsuario = grupos as Grupo[];        
      }
      this.showSpinner = false;
      console.log("grupos do caba:", this.gruposDoUsuario);
    });
  }
}
