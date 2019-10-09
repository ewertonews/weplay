import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  get authenticated(): boolean {
    return localStorage.getItem("usuario") != null;
  }


  get currentUser(): any {
    return this.afAuth.user;
  }
  
  doFacebookLogin(){
    console.log("logando com facebook")
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      provider.addScope('user_gender');
      provider.addScope('user_birthday');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        console.log("login bem sucedido");
        localStorage.setItem("tipoLogin", "facebook");
        resolve(res);
      }, err => {
        console.log("erro no login com facebook: ", err);
        reject(err);
      });
    });
  }

  doGoogleLogin(){
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
      .signInWithPopup(provider)
      .then(res => {
        //console.log("login google", res);
        localStorage.setItem("tipoLogin", "google");
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });
    });
  }

  logout(){
    console.log("Chamou o logout");
    localStorage.removeItem("usuario");
    localStorage.removeItem("usuarioRP");
    localStorage.removeItem("grupo");
    localStorage.removeItem("tipoLogin");
    localStorage.removeItem("playlist");
    return this.afAuth.auth.signOut();
  }
  // Returns current user UID
 
  // private updateUserData(): void {

  //   let path = `users/${this.currentUserId}`; // Endpoint on firebase
  //   let data = {
  //                name: this.currentUser.displayName,
  //                email: this.currentUser.email,
  //              }
  
  //   this.db.object(path).update(data)
  //   .catch(error => console.log(error));
  
  // }
}
