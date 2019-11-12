import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PlaylistService } from 'src/app/componentes/repertorios/services/playlist.service';
import { GruposService } from 'src/app/componentes/grupo/services/grupos.service';
var GrupoComponent = /** @class */ (function () {
    function GrupoComponent(playlistService, gruposService) {
        this.playlistService = playlistService;
        this.gruposService = gruposService;
        this.tabSelecionada = 0;
        this.musicasParaRepertorio = [];
        this.clearSelection = false;
        this.isAdmin = false;
        this.currentUser = JSON.parse(localStorage.getItem('usuarioRP'));
        console.log("currentUser", this.currentUser);
    }
    GrupoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var grupoSelecionado = localStorage.getItem("grupo");
        console.log('grupo selec', grupoSelecionado);
        if (grupoSelecionado) {
            this.grupo = JSON.parse(grupoSelecionado);
        }
        this.playlistService.getGroupSongs(this.grupo)
            .subscribe(function (resp) {
            console.log("getPlaylist 2", resp);
            var retornoMusicas = resp.map(function (obj) {
                var musicaGrupo = obj;
                return musicaGrupo.musica;
            });
            _this.playlistDoGrupo = {
                idGrupo: _this.grupo.id,
                musicas: retornoMusicas
            };
            _this.qtdMusicas = _this.playlistDoGrupo.musicas.length;
            localStorage.setItem("playlist", JSON.stringify(_this.playlistDoGrupo));
            console.log("PlaylistDoGrupo ", _this.playlistDoGrupo);
        });
        this.gruposService.getGroupUsers(this.grupo.id).subscribe(function (grupo) {
            var grupoUsuario = grupo;
            _this.usuariosDoGrupo = grupoUsuario.usuarios;
        });
        this.isAdmin = this.verifyIfUserIsAdmin(this.grupo, this.currentUser);
    };
    GrupoComponent.prototype.receiveMusicasSelecionadas = function ($event) {
        console.log("recebeu o evento");
        // let ehEditSetlist = localStorage.getItem("editlist");
        // if(ehEditSetlist){
        // }
        // $event.forEach(musica => {
        //   if(!this.musicasParaRepertorio.includes(musica)){
        //     this.musicasParaRepertorio.push(musica);
        //   }        
        // });
        this.musicasParaRepertorio = $event;
        console.log("musicasParaRepertorio", this.musicasParaRepertorio);
        if (localStorage.getItem("tab")) {
            var tabRep = document.getElementById('mat-tab-label-0-1');
            tabRep.click();
            localStorage.removeItem("tab");
        }
    };
    GrupoComponent.prototype.qtdGroupSetListsEvent = function ($event) {
        this.qtsSetlists = $event;
    };
    GrupoComponent.prototype.limparSelecao = function (event) {
        console.log("limpar selecao", event);
        this.clearSelection = event;
    };
    GrupoComponent.prototype.verifyIfUserIsAdmin = function (grupo, usuario) {
        return grupo.emailAdmins.includes(usuario.email);
    };
    GrupoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-grupo',
            templateUrl: './grupo.component.html',
            styleUrls: ['./grupo.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PlaylistService,
            GruposService])
    ], GrupoComponent);
    return GrupoComponent;
}());
export { GrupoComponent };
//# sourceMappingURL=grupo.component.js.map