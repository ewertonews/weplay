import { Component, OnInit, Input } from '@angular/core';
import { Grupo } from 'src/app/componentes/grupo/interfaces/grupo.model';
import { Usuario } from 'src/app/componentes/usuario/interfaces/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-grupo',
  templateUrl: './card-grupo.component.html',
  styleUrls: ['./card-grupo.component.css']
})
export class CardGrupoComponent implements OnInit {
  @Input() grupo: Grupo;

  admins: Array<Usuario> = [];

  constructor(private router: Router) { }

  ngOnInit() {
    //this.admins = this.grupo.emailMembros.filter(m => this.grupo.emailAdmins.includes(m.email));
    //console.log(this.admins);
  }

  detalhesGrupo(){
    localStorage.setItem("grupo", JSON.stringify(this.grupo));
    this.router.navigate(['/detalhe-grupo']);
  }

}
