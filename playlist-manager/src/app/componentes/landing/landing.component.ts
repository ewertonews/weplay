import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../autenticacao/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router,
    ) { }

  ngOnInit() {
    if(this.auth.authenticated){
      this.router.navigate(['/grupos']); 
    }
  }

  logarComFacebook(){
    this.auth.doFacebookLogin().then(res => {      
      console.log("resultado login: ", res);
      localStorage.setItem("usuario", JSON.stringify(res));
      this.router.navigate(['/grupos']);      
    });
  }

  logarComGoogle(){
    this.auth.doGoogleLogin().then(res => {      
      console.log("resultado login: ", res);
      localStorage.setItem("usuario", JSON.stringify(res));
      this.router.navigate(['/grupos']);      
    });
  }
}
