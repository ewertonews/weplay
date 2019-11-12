import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, Validators } from '@angular/forms';
import { PlaylistService } from 'src/app/componentes/repertorios/services/playlist.service';
import { MusicasService } from 'src/app/componentes/musicas/services/musicas.service';
import { replaceAll } from 'src/app/shared/GLOBAL_FUNCTIONS';
var CriarMusicaComponent = /** @class */ (function () {
    function CriarMusicaComponent(dialogRef, data, fb, playlistService, musicaService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.playlistService = playlistService;
        this.musicaService = musicaService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [COMMA, ENTER];
        this.tags = [];
        this.formNovaMusica = this.fb.group({
            id: '',
            nome: ['', Validators.required],
            artista: ['', Validators.required],
            ritmo: '',
            linkOuvir: [''],
            quantidadeVezesTocada: 0,
            ultimaVezTocada: '',
            linkCifra: '',
            tags: ''
        });
    }
    CriarMusicaComponent.prototype.ngOnInit = function () {
        this.playListDoGrupo = JSON.parse(localStorage.getItem("playlist"));
        this.grupo = JSON.parse(localStorage.getItem("grupo"));
    };
    CriarMusicaComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CriarMusicaComponent.prototype.save = function () {
        if (this.addSongToPlaylist()) {
            this.dialogRef.close();
        }
    };
    CriarMusicaComponent.prototype.saveAndContinue = function () {
        if (this.addSongToPlaylist()) {
            this.formNovaMusica.reset();
        }
    };
    //mover esse metodo para componente musicas
    CriarMusicaComponent.prototype.addSongToPlaylist = function () {
        var tudocerto = true;
        var musica = this.criarMusica();
        if (!musica) {
            alert("Esta música já está cadastrada!");
            return false;
        }
        else {
            localStorage.setItem("playlist", JSON.stringify(this.playListDoGrupo));
            this.playlistService.addSongToPlaylist(musica, this.grupo).then(function (resAddSong) {
                console.log("musica adiciona a playlist ");
            });
            return tudocerto;
        }
    };
    CriarMusicaComponent.prototype.criarMusica = function () {
        console.log("tags", this.tags);
        var nomeMusica = this.formNovaMusica.value.nome.trim();
        var nomesMusicas = this.playListDoGrupo.musicas.map(function (m) { return m.nome.trim(); });
        if (nomesMusicas.includes(nomeMusica)) {
            return null;
        }
        var novaMusica = {
            id: this.generateMusicId(this.formNovaMusica.value.nome),
            artista: this.formNovaMusica.value.artista,
            nome: this.formNovaMusica.value.nome,
            linkCifra: this.formNovaMusica.value.linkCifra,
            linkOuvir: this.formNovaMusica.value.linkOuvir,
            ritmo: this.formNovaMusica.value.ritmo,
            tags: this.tags.join(", "),
            quantidadeVezesTocada: this.formNovaMusica.value.quantidadeVezesTocada,
            ultimaVezTocada: this.formNovaMusica.value.ultimaVezTocada
        };
        this.playListDoGrupo.musicas.push(novaMusica);
        return novaMusica;
    };
    CriarMusicaComponent.prototype.generateMusicId = function (nomeMusica) {
        return replaceAll(nomeMusica.toLowerCase(), " ", "_") + "_" + this.grupo.id;
    };
    CriarMusicaComponent.prototype.add = function (event) {
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
    CriarMusicaComponent.prototype.remove = function (tag) {
        var index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    };
    CriarMusicaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-criar-musica',
            templateUrl: './criar-musica.component.html',
            styleUrls: ['./criar-musica.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, FormBuilder,
            PlaylistService,
            MusicasService])
    ], CriarMusicaComponent);
    return CriarMusicaComponent;
}());
export { CriarMusicaComponent };
//# sourceMappingURL=criar-musica.component.js.map