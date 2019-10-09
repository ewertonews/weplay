import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../autenticacao/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  sair(){
    
    this.auth.logout().then(() => {
      this.router.navigate(['home']);
    });
  }
}
