import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../autenticacao/auth.service';
import { Router } from '@angular/router';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log("INIT HEADER");
        if (this.auth.authenticated) {
        }
    };
    HeaderComponent.prototype.configUser = function () {
        var loggedUser = JSON.parse(localStorage.getItem("usuario"));
        console.log("loggedUser", loggedUser);
        var tipoLogin = localStorage.getItem("tipoLogin");
        var fotoUrl = loggedUser.user.photoURL;
        if (tipoLogin === "facebook") {
            fotoUrl = fotoUrl + "?type=large";
        }
        this.usuario = {
            id: loggedUser.user.uid,
            email: loggedUser.user.email,
            urlFoto: fotoUrl,
            nome: loggedUser.user.displayName,
            idGrupos: [],
            papel: null,
            sexo: null,
            telefone: null
        };
        localStorage.setItem("usuarioRP", JSON.stringify(this.usuario));
    };
    HeaderComponent.prototype.sair = function () {
        var _this = this;
        this.auth.logout().then(function () {
            _this.router.navigate(['home']);
        });
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map