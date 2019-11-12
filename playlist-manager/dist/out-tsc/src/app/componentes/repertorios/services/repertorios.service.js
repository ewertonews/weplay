import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { getAnoMesCriacaoGrupo } from '../../../shared/GLOBAL_FUNCTIONS';
var RepertoriosService = /** @class */ (function () {
    function RepertoriosService(firestore) {
        this.firestore = firestore;
    }
    RepertoriosService.prototype.createSetlist = function (grupo, repertorio) {
        var anomes = getAnoMesCriacaoGrupo(grupo);
        console.log(anomes);
        return this.firestore.collection('setlists/' + anomes + '/sets').doc(repertorio.id).set(repertorio);
    };
    RepertoriosService.prototype.getSetLists = function (grupo) {
        var anomes = getAnoMesCriacaoGrupo(grupo);
        return this.firestore.collection('setlists/' + anomes + '/sets', function (ref) { return ref.where('idGrupo', '==', grupo.id); }).valueChanges();
    };
    RepertoriosService.prototype.removeSetlist = function (setlist, grupo) {
        var anomes = getAnoMesCriacaoGrupo(grupo);
        return this.firestore.collection('setlists/' + anomes + '/sets').doc(setlist.id).delete();
    };
    RepertoriosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], RepertoriosService);
    return RepertoriosService;
}());
export { RepertoriosService };
//# sourceMappingURL=repertorios.service.js.map