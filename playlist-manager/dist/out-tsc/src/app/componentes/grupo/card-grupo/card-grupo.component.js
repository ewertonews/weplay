import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Grupo } from 'src/app/componentes/grupo/interfaces/grupo.model';
import { Router } from '@angular/router';
var CardGrupoComponent = /** @class */ (function () {
    function CardGrupoComponent(router) {
        this.router = router;
        this.admins = [];
    }
    CardGrupoComponent.prototype.ngOnInit = function () {
        //this.admins = this.grupo.emailMembros.filter(m => this.grupo.emailAdmins.includes(m.email));
        //console.log(this.admins);
    };
    CardGrupoComponent.prototype.detalhesGrupo = function () {
        localStorage.setItem("grupo", JSON.stringify(this.grupo));
        this.router.navigate(['/detalhe-grupo']);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Grupo)
    ], CardGrupoComponent.prototype, "grupo", void 0);
    CardGrupoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-card-grupo',
            templateUrl: './card-grupo.component.html',
            styleUrls: ['./card-grupo.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], CardGrupoComponent);
    return CardGrupoComponent;
}());
export { CardGrupoComponent };
//# sourceMappingURL=card-grupo.component.js.map