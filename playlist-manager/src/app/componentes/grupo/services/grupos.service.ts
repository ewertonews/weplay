import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Grupo } from '../interfaces/grupo.model';
import { Usuario } from '../../usuario/interfaces/usuario.model';
import { MembrosPorGrupo } from '../interfaces/membrosPorGrupo.model';
import { resolve } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private firestore: AngularFirestore) { }  

  createGroup(grupo: Grupo){
    return this.firestore.collection('grupos').doc(grupo.id).set(JSON.parse(JSON.stringify(grupo)));
  }

  getUserGroups(emailUsuario){
    return this.firestore.collection('grupos', ref => ref.where('emailMembros', 'array-contains', emailUsuario)).valueChanges();
  }

  getGroupUsers(idGrupo){
    return this.firestore.collection('usuariosPorGrupo').doc(idGrupo).valueChanges();
  }

  
  associateUserToGroup(idGrupo: string, usuario: Usuario){
    return new Promise((resolve) => {
      let jaTemAssoc: boolean;
      let associacao: MembrosPorGrupo;
      let sub = this.firestore.collection('usuariosPorGrupo', ref => ref.where('idGrupo', '==', idGrupo)).valueChanges().subscribe(ass => {
      if(ass.length == 0){
        jaTemAssoc = false;
        sub.unsubscribe();
        console.log("jaTemAssoc", jaTemAssoc);
        console.log("associacao", associacao);
        associacao = new MembrosPorGrupo();
        associacao.idGrupo = idGrupo;
        associacao.usuarios = [usuario];
        // this.firestore.collection('usuariosPorGrupo').doc(idGrupo).set(JSON.parse(JSON.stringify(associacao))).then(res => {
        //   console.log("Usuário associado ao grupo");
        // });

        resolve(this.firestore.collection('usuariosPorGrupo').doc(idGrupo).set(JSON.parse(JSON.stringify(associacao))));
      }else{        
        jaTemAssoc = true;
        associacao = ass[0] as MembrosPorGrupo;
        console.log("jaTemAssoc", jaTemAssoc);
        console.log("ass[ociacao]", ass);
        sub.unsubscribe();

        console.log("ASSOC", ass[0]);

        if (!associacao.usuarios.includes(usuario)){
          associacao.idGrupo = idGrupo;
          associacao.usuarios.push(usuario);
          this.firestore.doc('usuariosPorGrupo/' + idGrupo).update(associacao).then(res => {
            console.log("Usuário associado ao grupo");
            this.firestore.doc('grupos/'+ idGrupo).get().subscribe(grupo => {
              let grupoAtual: Grupo = grupo.data() as Grupo;
              console.log("grupoAtual", grupoAtual);
              grupoAtual.emailMembros.push(usuario.email);
              this.firestore.doc('convites/' + idGrupo + "_" + usuario.email).delete();
              resolve(this.firestore.doc('grupos/' + idGrupo).set(grupoAtual));
            });
          });
        }                  
      }
    });
    });        
  }
}
