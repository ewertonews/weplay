import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Playlist } from '../interfaces/playlist.model';
import { Musica } from '../interfaces/musica.model';
import { element } from '@angular/core/src/render3';
import * as firebase from 'firebase/app';
import { Grupo } from '../interfaces/grupo.model';
import { MusicasGrupo } from '../interfaces/musicasGrupos';
import { resolve } from 'url';
import { reject } from 'q';
//import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private firestore: AngularFirestore) { }
  collectionExists: boolean;

 
  createPlaylist(grupo: Grupo){
    
    return new Promise((resolve) => {
      let dataCricao = new Date(grupo.criadoEm);
      let anomes = dataCricao.getFullYear() + "_" + dataCricao.getDate();
      this.firestore.collection('musicasGrupos/').doc(anomes).get().subscribe(res => {
        if(!res.exists){
          resolve(this.firestore.collection('musicasGrupos').doc(anomes).collection('musicas').add({}));
        };
      });
    })
   
    
    //return this.firestore.collection('playlists').doc(grupoId).set(playlist);
  }


  getGroupSongs(grupo: Grupo){
    let anomes = this.getAnoMes(grupo);
    return this.firestore.collection('musicasGrupos/' + anomes + '/musicas', ref => ref.where('idGrupo', '==', grupo.id)).valueChanges();
  }

  
  
  removeSongFromPlaylist(musica, grupo){    
    let anomes = this.getAnoMes(grupo);
    return this.firestore.collection('musicasGrupos/' + anomes + '/musicas').doc(musica.id).delete();    
  }

  // addSongToPlaylist(playlist: Playlist){
  //   return this.firestore.doc('playlists/' + playlist.idGrupo).update(playlist);
  // }

  editSongFromPlaylist(novaMusica, grupo){
    let anomes = this.getAnoMes(grupo);
    let novoRegistro: MusicasGrupo = {
      idGrupo: grupo.id,
      musica: novaMusica
    };
    return this.firestore.doc('musicasGrupos/' + anomes + '/musicas/' + novaMusica.id).update(novoRegistro);
  }

  getAnoMes(grupo: Grupo){
    let dataCricao = new Date(grupo.criadoEm);
    let anomes = dataCricao.getFullYear() + "_" + dataCricao.getDate();
    return anomes;
  }
  addSongToPlaylist(musicaNova, grupo: Grupo){
    let anomes = this.getAnoMes(grupo);
    let regMusica: MusicasGrupo = {
      idGrupo: grupo.id,
      musica: musicaNova 
    };
    return this.firestore.collection('musicasGrupos/' + anomes + '/musicas').doc(musicaNova.id).set(regMusica);
    
    // let washingtonRef = db.collection('cities').doc('DC');
    // this.firestore.runTransaction(transaction => {
    //     // This code may get re-run multiple times if there are conflicts.
    //     return transaction.get(userRef).then(doc => {
    //         if (!doc.data().bookings) {
    //             transaction.set({
    //                 bookings: [booking]
    //             });
    //         } else {
    //             const bookings = doc.data().bookings;
    //             bookings.push(booking);
    //             transaction.update(userRef, { bookings: bookings });
    //         }
    //     });
    // })
     
  }
}
