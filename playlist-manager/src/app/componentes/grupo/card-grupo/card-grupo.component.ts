import { Component, OnInit, Input } from '@angular/core';
import { Grupo } from '../../grupo/interfaces/grupo.model';
import { Usuario } from '../../usuario/interfaces/usuario.model';
import { Router } from '@angular/router';
import { PlaylistService } from '../../repertorios/services/playlist.service';

@Component({
  selector: 'app-card-grupo',
  templateUrl: './card-grupo.component.html',
  styleUrls: ['./card-grupo.component.css']
})
export class CardGrupoComponent implements OnInit {
  @Input() grupo: Grupo;
  qtdMusicasGrupo: Number;
  admins: Array<Usuario> = [];
  nomesAdmins: string;

  constructor(private router: Router, private playListService: PlaylistService ) { }

  ngOnInit() {
    //this.admins = this.grupo.emailMembros.filter(m => this.grupo.emailAdmins.includes(m.email));
    //console.log(this.admins);
    this.gerarNomesAdmins();
     this.playListService.getGroupSongsCount(this.grupo).then(n => {
       this.qtdMusicasGrupo = n;
     });
  } 

  detalhesGrupo(){
    localStorage.setItem("grupo", JSON.stringify(this.grupo));
    this.router.navigate(['/detalhe-grupo']);
  }

  gerarNomesAdmins(){
    console.log("grupo do card: ", this.grupo);
    this.nomesAdmins = this.grupo.admins.map(admin => admin.nome).join(",");
  }
}
