import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Playlist } from '../interfaces/playlist.model';
import { Musica } from '../interfaces/musica.model';
import { element } from '@angular/core/src/render3';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private firestore: AngularFirestore) { }

 
  createPlaylist(grupoId: string){
    let playlist: Playlist = {
      idGrupo: grupoId,
      musicas: []
    };
    return this.firestore.collection('playlists').doc(grupoId).set(playlist);
  }

  getPlayList(groupId: string){
    return this.firestore.doc('playlists/' + groupId).get();   
  }

  removeSongFromPlaylist(musica, idPlaylist){
    return firebase.firestore().collection("playlists").doc(idPlaylist)
    .update({
      musicas: firebase.firestore.FieldValue.arrayRemove(musica)
    });
  }
  // addSongToPlaylist(playlist: Playlist){
  //   return this.firestore.doc('playlists/' + playlist.idGrupo).update(playlist);
  // }

  addSongToPlaylist(musica, idPlaylist){
   
    return firebase.firestore().collection("playlists").doc(idPlaylist)
    .update({
      musicas: firebase.firestore.FieldValue.arrayUnion(musica)
    });
    
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
    return this.firestore.collection("playlists").doc(idPlaylist).set(
      { musicas: [musica] },
      { merge: true }
    );  
  }
}
