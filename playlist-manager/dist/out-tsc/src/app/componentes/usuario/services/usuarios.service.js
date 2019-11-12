import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
var UsuariosService = /** @class */ (function () {
    function UsuariosService(firestore) {
        this.firestore = firestore;
    }
    UsuariosService.prototype.createUser = function (usuario) {
        return this.firestore.collection('usuarios').doc(usuario.id).set(usuario);
    };
    UsuariosService.prototype.getUsers = function () {
        return this.firestore.collection('usuarios').snapshotChanges();
    };
    UsuariosService.prototype.getUserByEmail = function (email) {
        return this.firestore.collection('usuarios', function (ref) { return ref.where('email', '==', email); }).valueChanges();
    };
    UsuariosService.prototype.updateUser = function (usuario) {
        delete usuario.id;
        this.firestore.doc('usuarios/' + usuario.id).update(usuario);
    };
    UsuariosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], UsuariosService);
    return UsuariosService;
}());
export { UsuariosService };
//# sourceMappingURL=usuarios.service.js.map