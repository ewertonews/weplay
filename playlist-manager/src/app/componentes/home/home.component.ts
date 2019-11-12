import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/componentes/usuario/interfaces/usuario.model';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { CriarGrupoModalComponent } from 'src/app/componentes/grupo/modals/criar-grupo/criar-grupo-modal.component';
import { Grupo } from 'src/app/componentes/grupo/interfaces/grupo.model';
import { UsuariosService } from 'src/app/componentes/usuario/services/usuarios.service';
import { GruposService } from 'src/app/componentes/grupo/services/grupos.service';
import { PlaylistService } from 'src/app/componentes/repertorios/services/playlist.service';


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
    this.setUsuario();  
  }


  private setUsuario() {
    let usuarioRP = localStorage.getItem("usuarioRP");
    if (usuarioRP) {
      this.usuario = JSON.parse(usuarioRP);
      this.obterGruposDoUsuario();
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
    const loggedUser = JSON.parse(localStorage.getItem("usuarioRP"));
    console.log("loggedUser", loggedUser);
    
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

      this.obterGruposDoUsuario();
    });   
  }

  criarGrupo(data){
    let grupo = new Grupo();    
    grupo.id = this.generateIdGrupo().toString();
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

    // this.playListService.createPlaylist(grupo).then(res => {
    //   console.log("PLAYLIST CRIADA");
    // }, error => {
    //   console.error("OCORREU UM ERRO NA CRIAÇÂO DA PLAYLIST");      
    // });

    console.log("grupos do usuario: ", this.gruposDoUsuario);

    
  }

  generateIdGrupo(){
    let hoje = new Date();
    //Math.random().toString(36).substring(2) 
    return "G" + hoje.getMilliseconds() + hoje.getSeconds() + hoje.getDate() + hoje.getMonth() + hoje.getFullYear();
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
