import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MembrosPorGrupo } from '../interfaces/membrosPorGrupo.model';
var GruposService = /** @class */ (function () {
    function GruposService(firestore) {
        this.firestore = firestore;
    }
    GruposService.prototype.createGroup = function (grupo) {
        return this.firestore.collection('grupos').doc(grupo.id).set(JSON.parse(JSON.stringify(grupo)));
    };
    GruposService.prototype.getUserGroups = function (emailUsuario) {
        return this.firestore.collection('grupos', function (ref) { return ref.where('emailMembros', 'array-contains', emailUsuario); }).valueChanges();
    };
    GruposService.prototype.getGroupUsers = function (idGrupo) {
        return this.firestore.collection('usuariosPorGrupo').doc(idGrupo).valueChanges();
    };
    GruposService.prototype.associateUserToGroup = function (idGrupo, usuario) {
        var _this = this;
        var jaTemAssoc;
        var associacao;
        var sub = this.firestore.collection('usuariosPorGrupo', function (ref) { return ref.where('idGrupo', '==', idGrupo); }).valueChanges().subscribe(function (ass) {
            if (ass.length == 0) {
                jaTemAssoc = false;
                sub.unsubscribe();
                console.log("jaTemAssoc", jaTemAssoc);
                console.log("associacao", associacao);
                associacao = new MembrosPorGrupo();
                associacao.idGrupo = idGrupo;
                associacao.usuarios = [usuario];
                _this.firestore.collection('usuariosPorGrupo').doc(idGrupo).set(JSON.parse(JSON.stringify(associacao))).then(function (res) {
                    console.log("Usuário associado ao grupo");
                });
            }
            else {
                jaTemAssoc = true;
                console.log("jaTemAssoc", jaTemAssoc);
                console.log("associacao", associacao);
                sub.unsubscribe();
                console.log("ASSOC", ass[0]);
                if (!associacao.usuarios.includes(usuario)) {
                    associacao.idGrupo = idGrupo;
                    associacao.usuarios.push(usuario);
                    _this.firestore.doc('usuariosPorGrupo/' + idGrupo).update(associacao).then(function (res) {
                        console.log("Usuário associado ao grupo");
                    });
                }
            }
        });
    };
    GruposService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], GruposService);
    return GruposService;
}());
export { GruposService };
//# sourceMappingURL=grupos.service.js.map