import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { getAnoMesCriacaoGrupo } from '../../../shared/GLOBAL_FUNCTIONS';
//import * as firebase from 'firebase';
var PlaylistService = /** @class */ (function () {
    function PlaylistService(firestore) {
        this.firestore = firestore;
    }
    PlaylistService.prototype.createPlaylist = function (grupo) {
        var _this = this;
        return new Promise(function (resolve) {
            var dataCricao = new Date(grupo.criadoEm);
            var anomes = dataCricao.getFullYear().toString() + "_" + dataCricao.getMonth().toString();
            console.log("ANOMES", anomes);
            _this.firestore.collection('musicasGrupos/').doc(anomes).get().subscribe(function (res) {
                if (!res.exists) {
                    resolve(_this.firestore.collection('musicasGrupos').doc(anomes).collection('musicas').add({}));
                }
                ;
            });
        });
        //return this.firestore.collection('playlists').doc(grupoId).set(playlist);
    };
    PlaylistService.prototype.getGroupSongs = function (grupo) {
        var anomes = getAnoMesCriacaoGrupo(grupo);
        return this.firestore.collection('musicasGrupos/' + anomes + '/musicas', function (ref) { return ref.where('idGrupo', '==', grupo.id); }).valueChanges();
    };
    PlaylistService.prototype.removeSongFromPlaylist = function (musica, grupo) {
        var anomes = getAnoMesCriacaoGrupo(grupo);
        return this.firestore.collection('musicasGrupos/' + anomes + '/musicas').doc(musica.id).delete();
    };
    PlaylistService.prototype.editSongFromPlaylist = function (novaMusica, grupo) {
        var anomes = getAnoMesCriacaoGrupo(grupo);
        var novoRegistro = {
            idGrupo: grupo.id,
            musica: novaMusica
        };
        return this.firestore.doc('musicasGrupos/' + anomes + '/musicas/' + novaMusica.id).update(novoRegistro);
    };
    PlaylistService.prototype.addSongToPlaylist = function (musicaNova, grupo) {
        var anomes = getAnoMesCriacaoGrupo(grupo);
        var regMusica = {
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
    };
    PlaylistService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], PlaylistService);
    return PlaylistService;
}());
export { PlaylistService };
//# sourceMappingURL=playlist.service.js.map