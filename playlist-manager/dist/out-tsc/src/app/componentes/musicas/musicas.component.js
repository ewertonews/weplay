import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog, MatPaginator, MatSort } from '@angular/material';
import { CriarMusicaComponent } from 'src/app/componentes/musicas/modals/criar-musica/criar-musica.component';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MensagemExcluirModalComponent } from 'src/app/shared/modals/mensagem-excluir-modal/mensagem-excluir-modal.component';
import { PlaylistService } from 'src/app/componentes/repertorios/services/playlist.service';
import { EditarMusicaModalComponent } from 'src/app/componentes/musicas/modals/editar-musica-modal/editar-musica-modal.component';
var MusicasComponent = /** @class */ (function () {
    function MusicasComponent(modalDialog, playlistService) {
        this.modalDialog = modalDialog;
        this.playlistService = playlistService;
        this.temMusicas = false;
        this.textoBotaoLista = "Criar Lista";
        this.selection = new SelectionModel(true, []);
        this.musicasSelecionadasEvent = new EventEmitter();
        this.tabSelecionada = 0;
        // tslint:disable-next-line:max-line-length
        this.displayedColumns = ['select', 'nome', 'artista', 'linkOuvir', 'linkCifra', 'quantidadeVezesTocada', 'ultimaVezTocada', 'tags', 'acoes'];
    }
    MusicasComponent.prototype.ngOnInit = function () {
        if (this.musicas.length > 0) {
            this.initPaginator();
            this.temMusicas = true;
            this.playlist = JSON.parse(localStorage.getItem("playlist"));
        }
    };
    // tslint:disable-next-line:use-life-cycle-interface
    MusicasComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    MusicasComponent.prototype.openCriarMusicaDialog = function () {
        var _this = this;
        console.log("Chamou o open dialog");
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.width = "70%";
        dialogConfig.height = "55%";
        var criarMusicadialogRef = this.modalDialog.open(CriarMusicaComponent, dialogConfig);
        criarMusicadialogRef.afterClosed().subscribe(function () {
            _this.playlist = JSON.parse(localStorage.getItem('playlist'));
            _this.musicas = _this.playlist.musicas;
            // this.dataSource.data = this.musicas;
            if (_this.musicas.length > 0) {
                _this.temMusicas = true;
                _this.initPaginator();
            }
        });
    };
    MusicasComponent.prototype.initPaginator = function () {
        var _this = this;
        this.dataSource = new MatTableDataSource(this.musicas);
        setTimeout(function () {
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    MusicasComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /** The label for the checkbox on the passed row */
    MusicasComponent.prototype.checkboxLabel = function (row) {
        return "" + (this.selection.isSelected(row) ? 'deselect' : 'select');
    };
    MusicasComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    MusicasComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.clearSelection() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    MusicasComponent.prototype.clearSelection = function () {
        this.selection.clear();
        this.musicasSelecionadas = this.selection.selected;
        //this.musicasSelecionadasEvent.emit(this.musicasSelecionadas);
    };
    MusicasComponent.prototype.selectMusica = function ($event, row) {
        if ($event) {
            this.selection.toggle(row);
            console.log("selected", this.selection.selected);
            this.musicasSelecionadas = this.selection.selected;
            // this.musicasSelecionadasEvent.emit(this.musicasSelecionadas);
            // let ehEdicaoSetlist = localStorage.getItem("editlist");
            // if(ehEdicaoSetlist){
            //   this.textoBotaoLista = "Add à lista em edição";            
            // }
        }
        //return null;
    };
    MusicasComponent.prototype.enviarMusicasCriarRepertorio = function () {
        console.log("chamou enviarMusicasCriarRepertorio");
        localStorage.setItem("tab", "1");
        this.musicasSelecionadasEvent.emit(this.musicasSelecionadas);
    };
    MusicasComponent.prototype.editarMusica = function (musica, indiceMusica) {
        var _this = this;
        console.log("musica para editar: ", musica);
        console.log("indice da musica: ", indiceMusica);
        var editarMusicadialogRef = this.modalDialog.open(EditarMusicaModalComponent, {
            disableClose: true,
            autoFocus: true,
            hasBackdrop: true,
            width: "70%",
            height: "55%",
            data: musica
        });
        editarMusicadialogRef.afterClosed().subscribe(function (musicaEditada) {
            if (musicaEditada) {
                _this.playlistService.editSongFromPlaylist(musicaEditada, JSON.parse(localStorage.getItem('grupo'))).then(function (res) {
                    console.log("edicao:", res);
                    _this.musicas[indiceMusica] = musicaEditada;
                    _this.dataSource.data = _this.musicas;
                    _this.updateDbPlaylist();
                });
            }
        });
    };
    MusicasComponent.prototype.excluirMusica = function (musica, indiceMusica) {
        var _this = this;
        console.log("musica para exluir: ", musica);
        var dialogRef = this.modalDialog.open(MensagemExcluirModalComponent, {
            width: '390px',
            data: { obj: musica, entidade: 'música' }
        });
        dialogRef.afterClosed().subscribe(function (excluir) {
            if (excluir) {
                _this.playlistService.removeSongFromPlaylist(musica, JSON.parse(localStorage.getItem('grupo'))).then(function (res) {
                    _this.musicas.splice(indiceMusica, 1);
                    _this.dataSource.data = _this.musicas;
                    _this.updateDbPlaylist();
                    alert("Musica excluida!");
                    console.log("musica excluida", res);
                    console.log("nova playlist:", _this.playlist);
                    if (_this.musicas.length == 0) {
                        _this.temMusicas = false;
                    }
                }).catch(function (error) {
                    console.log("DEU ERRO!!", error);
                });
            }
        });
    };
    MusicasComponent.prototype.updateDbPlaylist = function () {
        this.playlist.musicas = this.musicas;
        localStorage.setItem('playlist', JSON.stringify(this.playlist));
    };
    Object.defineProperty(MusicasComponent.prototype, "clearSelected", {
        get: function () { return this._clearSelected; },
        set: function (clearSelected) {
            console.log("RECEBEU CLEAR SELECTED", clearSelected);
            this._clearSelected = clearSelected;
            this.clearSelection();
            this.textoBotaoLista = "Criar lista";
            this._clearSelected = false;
        },
        enumerable: true,
        configurable: true
    });
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], MusicasComponent.prototype, "musicas", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MusicasComponent.prototype, "musicasSelecionadasEvent", void 0);
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], MusicasComponent.prototype, "paginator", void 0);
    tslib_1.__decorate([
        ViewChild(MatSort),
        tslib_1.__metadata("design:type", MatSort)
    ], MusicasComponent.prototype, "sort", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], MusicasComponent.prototype, "clearSelected", null);
    MusicasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-musicas',
            templateUrl: './musicas.component.html',
            styleUrls: ['./musicas.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MatDialog, PlaylistService])
    ], MusicasComponent);
    return MusicasComponent;
}());
export { MusicasComponent };
//# sourceMappingURL=musicas.component.js.map