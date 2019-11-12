import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return localStorage.getItem("usuario") != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this.afAuth.user;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        console.log("logando com facebook");
        return new Promise(function (resolve, reject) {
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('public_profile');
            provider.addScope('user_gender');
            provider.addScope('user_birthday');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                console.log("login bem sucedido");
                localStorage.setItem("tipoLogin", "facebook");
                resolve(res);
            }, function (err) {
                console.log("erro no login com facebook: ", err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                //console.log("login google", res);
                localStorage.setItem("tipoLogin", "google");
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.logout = function () {
        console.log("Chamou o logout");
        localStorage.removeItem("usuario");
        localStorage.removeItem("usuarioRP");
        localStorage.removeItem("grupo");
        localStorage.removeItem("tipoLogin");
        localStorage.removeItem("playlist");
        return this.afAuth.auth.signOut();
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map