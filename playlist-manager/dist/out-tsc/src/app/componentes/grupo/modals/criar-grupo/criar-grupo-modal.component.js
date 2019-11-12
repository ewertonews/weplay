import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grupo } from 'src/app/componentes/grupo/interfaces/grupo.model';
import { FormBuilder } from '@angular/forms';
var CriarGrupoModalComponent = /** @class */ (function () {
    function CriarGrupoModalComponent(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.formNovoGrupo = this.fb.group({
            nome: '',
        });
    }
    CriarGrupoModalComponent.prototype.ngOnInit = function () {
    };
    CriarGrupoModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CriarGrupoModalComponent.prototype.save = function () {
        this.dialogRef.close(this.formNovoGrupo.value);
    };
    CriarGrupoModalComponent.prototype.getFotoRef = function (event) {
        console.log(event.target.files[0]);
    };
    CriarGrupoModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-criar-grupo',
            templateUrl: './criar-grupo-modal.component.html',
            styleUrls: ['./criar-grupo-modal.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef,
            Grupo,
            FormBuilder])
    ], CriarGrupoModalComponent);
    return CriarGrupoModalComponent;
}());
export { CriarGrupoModalComponent };
//# sourceMappingURL=criar-grupo-modal.component.js.map