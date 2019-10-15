import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Musica } from '../interfaces/musica.model';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  constructor(private firestore: AngularFirestore) { }

  createSong(musica: Musica){
    return this.firestore.collection('musicas').doc(musica.id).set(musica);
  }
}
