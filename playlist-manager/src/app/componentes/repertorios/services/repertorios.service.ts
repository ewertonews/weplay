import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { getAnoMesCriacaoGrupo } from '../../../shared/GLOBAL_FUNCTIONS';
import { Grupo } from '../../grupo/interfaces/grupo.model';
import { Setlist } from '../interfaces/setlist.model';

@Injectable({
  providedIn: 'root'
})
export class RepertoriosService {

  constructor(private firestore: AngularFirestore) { }

  createSetlist(grupo: Grupo, repertorio: Setlist){
   
    let anomes = getAnoMesCriacaoGrupo(grupo);   
    console.log(anomes);
    return this.firestore.collection('setlists/' + anomes + '/sets').doc(repertorio.id).set(repertorio);
  }

  getSetLists(grupo: Grupo){
    let anomes = getAnoMesCriacaoGrupo(grupo);
    return this.firestore.collection('setlists/' + anomes + '/sets', ref => ref.where('idGrupo', '==', grupo.id)).valueChanges();
  }

  removeSetlist(setlist: Setlist, grupo: Grupo){    
    let anomes = getAnoMesCriacaoGrupo(grupo);
    return this.firestore.collection('setlists/' + anomes + '/sets').doc(setlist.id).delete();    
  }
}
