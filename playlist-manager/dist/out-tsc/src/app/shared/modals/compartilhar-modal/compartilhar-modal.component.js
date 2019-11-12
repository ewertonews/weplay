import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
var CompartilharModalComponent = /** @class */ (function () {
    function CompartilharModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CompartilharModalComponent.prototype.ngOnInit = function () {
    };
    CompartilharModalComponent.prototype.copiar = function () {
        var conteudo = this.data.share;
        // alert(conteudo.text);
        var el = document.createElement('textarea');
        el.value = conteudo.text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert("conteudo copiado!");
    };
    CompartilharModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-compartilhar-modal',
            templateUrl: './compartilhar-modal.component.html',
            styleUrls: ['./compartilhar-modal.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], CompartilharModalComponent);
    return CompartilharModalComponent;
}());
export { CompartilharModalComponent };
//# sourceMappingURL=compartilhar-modal.component.js.map