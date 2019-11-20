import { Injectable } from '@angular/core';
import { Convite } from '../interfaces/convite.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ConviteService {

  constructor(private firestore: AngularFirestore) { }

  createConvite(convite: Convite){
    return this.firestore.collection('convites').doc(convite.id).set(JSON.parse(JSON.stringify(convite)));
  }

  getConvitesUsuario(email: string) {
    return this.firestore.collection('convites', ref => ref.where('email', '==', email)).valueChanges();
  }

  removeConvite(idConvite: string){
    return this.firestore.collection('convites').doc(idConvite).delete();
  }

  getConvitesGrupo(idGrupo: string) {
    return this.firestore.collection('convites', ref => ref.where('email', '==', idGrupo)).valueChanges();
  }


}
