import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { Router } from '@angular/router';
var LandingComponent = /** @class */ (function () {
    function LandingComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated) {
            this.router.navigate(['/grupos']);
        }
    };
    LandingComponent.prototype.logarComFacebook = function () {
        var _this = this;
        this.auth.doFacebookLogin().then(function (res) {
            console.log("resultado login: ", res);
            localStorage.setItem("usuario", JSON.stringify(res));
            _this.router.navigate(['/grupos']);
        });
    };
    LandingComponent.prototype.logarComGoogle = function () {
        var _this = this;
        this.auth.doGoogleLogin().then(function (res) {
            console.log("resultado login: ", res);
            localStorage.setItem("usuario", JSON.stringify(res));
            _this.router.navigate(['/grupos']);
        });
    };
    LandingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], LandingComponent);
    return LandingComponent;
}());
export { LandingComponent };
//# sourceMappingURL=landing.component.js.map