import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from 'src/app/autenticacao/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CriarGrupoModalComponent } from 'src/app/componentes/grupo/modals/criar-grupo/criar-grupo-modal.component';
import { Grupo } from 'src/app/componentes/grupo/interfaces/grupo.model';
import { UsuariosService } from 'src/app/componentes/usuario/services/usuarios.service';
import { GruposService } from 'src/app/componentes/grupo/services/grupos.service';
import { PlaylistService } from 'src/app/componentes/repertorios/services/playlist.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router, dialogGrupo, userService, grupoService, playListService) {
        this.auth = auth;
        this.router = router;
        this.dialogGrupo = dialogGrupo;
        this.userService = userService;
        this.grupoService = grupoService;
        this.playListService = playListService;
        this.gruposDoUsuario = [];
        this.showSpinner = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!this.auth.authenticated) {
            this.router.navigate(['']);
        }
        this.setUsuario();
    };
    HomeComponent.prototype.setUsuario = function () {
        var usuarioRP = localStorage.getItem("usuarioRP");
        if (usuarioRP) {
            this.usuario = JSON.parse(usuarioRP);
            this.obterGruposDoUsuario();
        }
        else {
            this.criarOuAtualizarUsuario();
        }
    };
    HomeComponent.prototype.openDialog = function () {
        var _this = this;
        console.log("Chamou o open dialog");
        var dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.maxWidth = "100%";
        dialogConfig.minWidth = "70%";
        var dialogRef = this.dialogGrupo.open(CriarGrupoModalComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            console.log("Dialog output:", data);
            if (data) {
                _this.criarGrupo(data);
            }
        });
    };
    HomeComponent.prototype.criarOuAtualizarUsuario = function () {
        var _this = this;
        var loggedUser = JSON.parse(localStorage.getItem("usuarioRP"));
        console.log("loggedUser", loggedUser);
        this.userService.getUserByEmail(loggedUser.user.email).subscribe(function (respUserQuery) {
            if (respUserQuery.length === 0) {
                _this.showSpinner = false;
                _this.userService.createUser(_this.usuario);
                console.log("usuario criado", _this.usuario);
            }
            else {
                var userFromDB = respUserQuery[0];
                _this.usuario.idGrupos = userFromDB.idGrupos;
                _this.usuario.sexo = userFromDB.sexo;
                _this.usuario.papel = userFromDB.papel;
            }
            _this.obterGruposDoUsuario();
        });
    };
    HomeComponent.prototype.criarGrupo = function (data) {
        var _this = this;
        var grupo = new Grupo();
        grupo.id = this.generateIdGrupo().toString();
        grupo.nome = data.nome;
        grupo.criadoEm = new Date().toLocaleDateString();
        this.usuario.idGrupos.push(grupo.id);
        grupo.emailMembros = [this.usuario.email];
        grupo.emailAdmins = [this.usuario.email];
        grupo.foto = "https://via.placeholder.com/300x200?text=Foto+do+grupo+aqui";
        console.log("grupo criado: ", grupo);
        this.gruposDoUsuario.push(grupo);
        this.grupoService.createGroup(grupo).then(function (res) {
            console.log('RESPOSTA CRIAÇÃO GRUPO: ', res);
            _this.grupoService.associateUserToGroup(grupo.id, _this.usuario);
        });
        // this.playListService.createPlaylist(grupo).then(res => {
        //   console.log("PLAYLIST CRIADA");
        // }, error => {
        //   console.error("OCORREU UM ERRO NA CRIAÇÂO DA PLAYLIST");      
        // });
        console.log("grupos do usuario: ", this.gruposDoUsuario);
    };
    HomeComponent.prototype.generateIdGrupo = function () {
        var hoje = new Date();
        //Math.random().toString(36).substring(2) 
        return "G" + hoje.getMilliseconds() + hoje.getSeconds() + hoje.getDate() + hoje.getMonth() + hoje.getFullYear();
    };
    HomeComponent.prototype.obterGruposDoUsuario = function () {
        var _this = this;
        this.grupoService.getUserGroups(this.usuario.email).subscribe(function (grupos) {
            if (grupos.length > 0) {
                _this.gruposDoUsuario = grupos;
            }
            _this.showSpinner = false;
            console.log("grupos do caba:", _this.gruposDoUsuario);
        });
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router,
            MatDialog,
            UsuariosService,
            GruposService,
            PlaylistService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map