import * as tslib_1 from "tslib";
// tslint:disable:variable-name
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { RepertoriosService } from 'src/app/componentes/repertorios/services/repertorios.service';
import { generateId } from 'src/app/shared/GLOBAL_FUNCTIONS';
import { DateAdapter } from '@angular/material/core';
import { NgNavigatorShareService } from 'ng-navigator-share';
import { MatDialog } from '@angular/material';
import { CompartilharModalComponent } from 'src/app/shared/modals/compartilhar-modal/compartilhar-modal.component';
import { MensagemExcluirModalComponent } from 'src/app/shared/modals/mensagem-excluir-modal/mensagem-excluir-modal.component';
var RepertoriosComponent = /** @class */ (function () {
    //setList: any[] = this.musicasRepertorio;
    function RepertoriosComponent(fb, repertorioService, _adapter, shareService, modalDialog) {
        this.fb = fb;
        this.repertorioService = repertorioService;
        this._adapter = _adapter;
        this.shareService = shareService;
        this.modalDialog = modalDialog;
        //@Input() musicasRepertorio: any[]; 
        this.qtdGroupSetListsEvent = new EventEmitter();
        this.needToClearSelection = new EventEmitter();
        this.clearCommand = false;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [COMMA, ENTER];
        this.momentos = [];
        this.grupoSetLists = [];
        this.tituloRepertorio = "Novo Repertório";
        this.formNovoRepertorio = this.fb.group({
            titulo: ['', Validators.required],
            dataEvento: ['', Validators.required],
            momentos: ['']
        });
        this.instanciateSetlistEdicao();
    }
    RepertoriosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._adapter.setLocale('pt-BR');
        this.grupo = JSON.parse(localStorage.getItem('grupo'));
        this.repertorioService.getSetLists(this.grupo).subscribe(function (setlists) {
            _this.grupoSetLists = setlists;
            _this.grupoSetLists.sort(function (a, b) { return (new Date(a.dataEvento) > new Date(b.dataEvento)) ? 1 : -1; });
            _this.qtdGroupSetListsEvent.emit(_this.grupoSetLists.length);
        }, function (error) {
            alert("Falha ao obter setlists");
        });
    };
    RepertoriosComponent.prototype.criarRepertorio = function () {
        var _this = this;
        var repertorio = {
            id: this.setlistEdicao.id !== '' ? this.setlistEdicao.id : this.grupo.id + "_" + generateId(),
            idGrupo: this.setlistEdicao.idGrupo !== '' ? this.setlistEdicao.idGrupo : this.grupo.id,
            tituloEvento: this.formNovoRepertorio.value.titulo.toString(),
            dataEvento: this.formNovoRepertorio.value.dataEvento.toString(),
            items: this.setlistEdicao.items
        };
        console.log("REPERTORIO", repertorio);
        this.repertorioService.createSetlist(this.grupo, repertorio).then(function (res) {
            _this.musicasRepertorio = [];
            console.log(repertorio);
            _this.instanciateSetlistEdicao();
            _this.tituloRepertorio = "Novo Repertório";
            _this.formNovoRepertorio.reset();
            var mensagemSucesso = "Repertório criado com sucesso!";
            if (_this.ehEdicao) {
                _this.ehEdicao = false;
                mensagemSucesso = "Repertório atualizado com sucesso!";
            }
            alert(mensagemSucesso);
        }).catch(function (error) {
            alert("Deu errado! :(");
            console.log(error);
        });
    };
    RepertoriosComponent.prototype.cancelarCriacaoRepertorio = function () {
        this.clearCommand = true;
        this.needToClearSelection.emit(Object.assign({}, this.clearCommand));
        this.musicasRepertorio = [];
        this.momentos = [];
        this.formNovoRepertorio.reset();
        if (this.ehEdicao) {
            console.log("this.copiaSetlistEdicao.items cancelamento", this.copiaSetlistEdicao.items);
            this.setlistEdicao.items = this.copiaSetlistEdicao.items; // = this.itemsOriginaisEdicao; 
            console.log(" this.setlistEdicao apos reatribuicao de items", this.setlistEdicao);
            this.grupoSetLists = this.grupoSetlistsOriginal;
            console.log(this.grupoSetLists);
            this.ehEdicao = false;
        }
        this.instanciateSetlistEdicao();
        this.clearCommand = false;
    };
    RepertoriosComponent.prototype.excluirMusica = function (item) {
        var indexToDelete = this.setlistEdicao.items.indexOf(item);
        this.setlistEdicao.items.splice(indexToDelete, 1);
        this.needToClearSelection.emit(Object.assign({}, this.clearCommand));
    };
    RepertoriosComponent.prototype.podeEditarSetlist = function (setlist) {
        var hoje = new Date();
        return new Date(setlist.dataEvento.toString()) < hoje;
    };
    RepertoriosComponent.prototype.editarSetlist = function (setlist) {
        if (this.podeEditarSetlist(setlist) === false) {
            alert("Não é possível editar a lista de um evento passado");
            return;
        }
        this.ehEdicao = true;
        this.grupoSetlistsOriginal = JSON.parse(JSON.stringify(this.grupoSetLists));
        Object.assign(this.setlistEdicao, setlist);
        this.copiaSetlistEdicao = JSON.parse(JSON.stringify(setlist));
        // console.log("this.copiaSetlistEdicao", this.copiaSetlistEdicao);
        this.tituloRepertorio = "Editar Repertório";
        // console.log("Editar setlist", setlist)
        this.momentos = setlist.items.filter(function (i) { return !i.nome; });
        // this.musicasRepertorio = setlist.items;
        window.scroll(0, 0);
        this.formNovoRepertorio.setValue({
            titulo: setlist.tituloEvento,
            dataEvento: new Date(setlist.dataEvento),
            momentos: []
        });
    };
    Object.defineProperty(RepertoriosComponent.prototype, "musicasRepertorio", {
        set: function (musicasLista) {
            var _this = this;
            console.log("Musicas recebidas da lista: ", musicasLista);
            if (this.ehEdicao) {
                musicasLista.forEach(function (musica) {
                    _this.setlistEdicao.items.push(musica);
                });
                return;
            }
            this.setlistEdicao.items = musicasLista;
        },
        enumerable: true,
        configurable: true
    });
    RepertoriosComponent.prototype.instanciateSetlistEdicao = function () {
        this.setlistEdicao = {
            id: '',
            dataEvento: null,
            idGrupo: '',
            tituloEvento: '',
            items: []
        };
        this.copiaSetlistEdicao = {
            id: '',
            dataEvento: null,
            idGrupo: '',
            tituloEvento: '',
            items: []
        };
    };
    RepertoriosComponent.prototype.excluirSetlist = function (setlist) {
        var _this = this;
        var dialogRef = this.modalDialog.open(MensagemExcluirModalComponent, {
            width: '450px',
            data: { obj: setlist, entidade: 'repertório' }
        });
        dialogRef.afterClosed().subscribe(function (excluir) {
            if (excluir) {
                if (_this.podeEditarSetlist(setlist) === false) {
                    alert("Não é possível excluir a lista de um evento passado");
                    return;
                }
                _this.repertorioService.removeSetlist(setlist, _this.grupo).then(function (res) {
                    console.log("Setlist excluida com sucesso");
                    alert("Setlist excluida com sucesso");
                }).catch(function (error) {
                    console.error(error);
                    alert(error || error.message);
                });
            }
        });
    };
    RepertoriosComponent.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    RepertoriosComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.momentos.unshift(value.trim());
            this.setlistEdicao.items.unshift(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    RepertoriosComponent.prototype.remove = function (momento) {
        var indexMomentos = this.momentos.indexOf(momento);
        var indexMusicas = this.setlistEdicao.items.indexOf(momento);
        if (indexMomentos >= 0) {
            this.momentos.splice(indexMomentos, 1);
        }
        if (indexMusicas >= 0) {
            this.setlistEdicao.items.splice(indexMusicas, 1);
        }
    };
    RepertoriosComponent.prototype.compartilhar = function (setlist) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var listaMusicas, shareText, sharedResponse, error_1, dialogRef;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(setlist);
                        listaMusicas = setlist.tituloEvento + "\r\n" + new Date(setlist.dataEvento).toLocaleDateString() + "\r\n";
                        listaMusicas = listaMusicas + "Ordem:\r\n";
                        setlist.items.forEach(function (item) {
                            if (item.nome) {
                                listaMusicas = listaMusicas + "  > " + item.nome + " - " + item.artista + "\r\n";
                            }
                            else {
                                listaMusicas = listaMusicas + item + "\r\n";
                            }
                        });
                        shareText = {
                            title: setlist.tituloEvento + " - " + setlist.dataEvento.toString(),
                            text: listaMusicas,
                            url: ''
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.shareService.share(shareText)];
                    case 2:
                        sharedResponse = _a.sent();
                        console.log(sharedResponse);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log('You app is not shared, reason: ', error_1);
                        console.log(shareText);
                        dialogRef = this.modalDialog.open(CompartilharModalComponent, {
                            width: '450px',
                            data: { share: shareText, repertorio: setlist }
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], RepertoriosComponent.prototype, "qtdGroupSetListsEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], RepertoriosComponent.prototype, "needToClearSelection", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], RepertoriosComponent.prototype, "musicasRepertorio", null);
    RepertoriosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-repertorios',
            templateUrl: './repertorios.component.html',
            styleUrls: ['./repertorios.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            RepertoriosService,
            DateAdapter,
            NgNavigatorShareService,
            MatDialog])
    ], RepertoriosComponent);
    return RepertoriosComponent;
}());
export { RepertoriosComponent };
//# sourceMappingURL=repertorios.component.js.map