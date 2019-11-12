import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../autenticacao/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuario/interfaces/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //@Input() usuario: Usuario;
  usuario: Usuario;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    //console.log("INIT HEADER");
    if(this.auth.authenticated){
      this.configUser();
    }
  }


  configUser(){
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
          telefone: null,
          status: null
    };

    localStorage.setItem("usuarioRP", JSON.stringify(this.usuario));

  }

  sair(){
    
    this.auth.logout().then(() => {
      this.router.navigate(['home']);
    });
  }
}
