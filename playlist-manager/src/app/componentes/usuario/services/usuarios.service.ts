import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../interfaces/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private firestore: AngularFirestore) { }


  createUser(usuario: Usuario){
    return this.firestore.collection('usuarios').doc(usuario.email).set(usuario);
  }

  getUsers() {
    return this.firestore.collection('usuarios').snapshotChanges();
  }

  getUserByEmail(email: string) {
    return this.firestore.collection('usuarios', ref => ref.where('email', '==', email)).valueChanges();
  }

  updateUser(usuario: Usuario){
    delete usuario.id;
    this.firestore.doc('usuarios/' + usuario.id).update(usuario);
  }
}
