import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
var MusicasService = /** @class */ (function () {
    function MusicasService(firestore) {
        this.firestore = firestore;
    }
    MusicasService.prototype.createSong = function (musica) {
        return this.firestore.collection('musicas').doc(musica.id).set(musica);
    };
    MusicasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], MusicasService);
    return MusicasService;
}());
export { MusicasService };
//# sourceMappingURL=musicas.service.js.map