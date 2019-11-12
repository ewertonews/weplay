import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
var EditarMusicaModalComponent = /** @class */ (function () {
    function EditarMusicaModalComponent(dialogRef, musica, fb) {
        this.dialogRef = dialogRef;
        this.musica = musica;
        this.fb = fb;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [COMMA, ENTER];
        this.tags = [];
    }
    EditarMusicaModalComponent.prototype.ngOnInit = function () {
        this.tags = this.musica.tags.split(",");
        this.formEditarMusica = this.fb.group({
            id: this.musica.id,
            nome: [this.musica.nome, Validators.required],
            artista: [this.musica.artista, Validators.required],
            ritmo: this.musica.ritmo,
            linkOuvir: [this.musica.linkOuvir],
            quantidadeVezesTocada: this.musica.quantidadeVezesTocada,
            ultimaVezTocada: this.musica.ultimaVezTocada,
            linkCifra: this.musica.linkCifra,
            tags: ['']
        });
        this.formEditarMusica.valueChanges.subscribe(console.log);
    };
    EditarMusicaModalComponent.prototype.onCancelar = function () {
        this.dialogRef.close();
    };
    EditarMusicaModalComponent.prototype.salvar = function () {
        //this.formEditarMusica.setValue({tags: this.tags.join(", ")});
        this.dialogRef.close(this.formEditarMusica.value);
    };
    EditarMusicaModalComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    EditarMusicaModalComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    EditarMusicaModalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-editar-musica-modal',
            templateUrl: './editar-musica-modal.component.html',
            styleUrls: ['./editar-musica-modal.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, FormBuilder])
    ], EditarMusicaModalComponent);
    return EditarMusicaModalComponent;
}());
export { EditarMusicaModalComponent };
//# sourceMappingURL=editar-musica-modal.component.js.map