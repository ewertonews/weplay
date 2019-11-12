import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
var MensagemExcluirModalComponent = /** @class */ (function () {
    function MensagemExcluirModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MensagemExcluirModalComponent.prototype.ngOnInit = function () {
    };
    MensagemExcluirModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MensagemExcluirModalComponent.prototype.excluir = function () {
        this.dialogRef.close(true);
    };
    MensagemExcluirModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-mensagem-excluir-modal',
            templateUrl: './mensagem-excluir-modal.component.html',
            styleUrls: ['./mensagem-excluir-modal.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], MensagemExcluirModalComponent);
    return MensagemExcluirModalComponent;
}());
export { MensagemExcluirModalComponent };
//# sourceMappingURL=mensagem-excluir-modal.component.js.map