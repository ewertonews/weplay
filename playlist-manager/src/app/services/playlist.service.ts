import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Playlist } from '../interfaces/playlist.model';
import { Musica } from '../interfaces/musica.model';

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

  getPlayList(idGrupo: string){
    return this.firestore.doc('playlists/' + idGrupo).get();
  }

  addSongToPlaylist(playlist: Playlist){
    return this.firestore.doc('playlists/' + playlist.idGrupo).update(playlist);
  }
}
