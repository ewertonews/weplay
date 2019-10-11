(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-lte.conf.ts":
/*!***********************************!*\
  !*** ./src/app/admin-lte.conf.ts ***!
  \***********************************/
/*! exports provided: adminLteConf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminLteConf", function() { return adminLteConf; });
var adminLteConf = {
    skin: 'green',
    sidebarLeftMenu: [
        { label: 'Início', route: '/home', iconClasses: 'fa fa-th' }
    ]
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _areas_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./areas/home/home.component */ "./src/app/areas/home/home.component.ts");
/* harmony import */ var _areas_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./areas/landing/landing.component */ "./src/app/areas/landing/landing.component.ts");
/* harmony import */ var _areas_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./areas/grupos/grupos.component */ "./src/app/areas/grupos/grupos.component.ts");






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _areas_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
    { path: 'grupos', component: _areas_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'detalhe-grupo', component: _areas_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_5__["GruposComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'playlist-manager';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular_admin_lte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-admin-lte */ "./node_modules/angular-admin-lte/fesm5/angular-admin-lte.js");
/* harmony import */ var _areas_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./areas/home/home.component */ "./src/app/areas/home/home.component.ts");
/* harmony import */ var _admin_lte_conf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-lte.conf */ "./src/app/admin-lte.conf.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _areas_landing_landing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./areas/landing/landing.component */ "./src/app/areas/landing/landing.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _autenticacao_auth_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./autenticacao/auth.service */ "./src/app/autenticacao/auth.service.ts");
/* harmony import */ var _modals_criar_grupo_criar_grupo_modal_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modals/criar-grupo/criar-grupo-modal.component */ "./src/app/modals/criar-grupo/criar-grupo-modal.component.ts");
/* harmony import */ var _areas_grupos_card_grupo_card_grupo_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./areas/grupos/card-grupo/card-grupo.component */ "./src/app/areas/grupos/card-grupo/card-grupo.component.ts");
/* harmony import */ var _areas_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./areas/grupos/grupos.component */ "./src/app/areas/grupos/grupos.component.ts");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var _areas_musicas_musicas_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./areas/musicas/musicas.component */ "./src/app/areas/musicas/musicas.component.ts");
/* harmony import */ var _modals_criar_musica_criar_musica_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modals/criar-musica/criar-musica.component */ "./src/app/modals/criar-musica/criar-musica.component.ts");
/* harmony import */ var _areas_musicas_portuguese_paginator_intl__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./areas/musicas/portuguese-paginator-intl */ "./src/app/areas/musicas/portuguese-paginator-intl.ts");











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _areas_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _areas_landing_landing_component__WEBPACK_IMPORTED_MODULE_29__["LandingComponent"],
                _modals_criar_grupo_criar_grupo_modal_component__WEBPACK_IMPORTED_MODULE_36__["CriarGrupoModalComponent"],
                _areas_grupos_card_grupo_card_grupo_component__WEBPACK_IMPORTED_MODULE_37__["CardGrupoComponent"],
                _areas_grupos_grupos_component__WEBPACK_IMPORTED_MODULE_38__["GruposComponent"],
                _areas_musicas_musicas_component__WEBPACK_IMPORTED_MODULE_40__["MusicasComponent"],
                _modals_criar_musica_criar_musica_component__WEBPACK_IMPORTED_MODULE_41__["CriarMusicaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_admin_lte__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"].forRoot(_admin_lte_conf__WEBPACK_IMPORTED_MODULE_7__["adminLteConf"]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_34__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_31__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_32__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_33__["AngularFireDatabaseModule"]
            ],
            providers: [
                _autenticacao_auth_service__WEBPACK_IMPORTED_MODULE_35__["AuthService"],
                _services_usuarios_service__WEBPACK_IMPORTED_MODULE_39__["UsuariosService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorIntl"], useValue: Object(_areas_musicas_portuguese_paginator_intl__WEBPACK_IMPORTED_MODULE_42__["getPortuguesePaginatorIntl"])() },
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_modals_criar_grupo_criar_grupo_modal_component__WEBPACK_IMPORTED_MODULE_36__["CriarGrupoModalComponent"], _modals_criar_musica_criar_musica_component__WEBPACK_IMPORTED_MODULE_41__["CriarMusicaComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/areas/grupos/card-grupo/card-grupo.component.css":
/*!******************************************************************!*\
  !*** ./src/app/areas/grupos/card-grupo/card-grupo.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 300px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvZ3J1cG9zL2NhcmQtZ3J1cG8vY2FyZC1ncnVwby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXJlYXMvZ3J1cG9zL2NhcmQtZ3J1cG8vY2FyZC1ncnVwby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/areas/grupos/card-grupo/card-grupo.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/areas/grupos/card-grupo/card-grupo.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n      <mat-card-title>{{grupo.nome}}</mat-card-title>\r\n      <!-- <mat-card-subtitle>subtítulo</mat-card-subtitle> -->\r\n    </mat-card-header>\r\n    <img mat-card-image src=\"{{grupo.foto}}\" alt=\"foto de {{grupo.nome}}\">\r\n    <mat-card-content>\r\n      <p>\r\n        <strong>Administrador(es):</strong>\r\n      </p>\r\n      <ul>\r\n        <li *ngFor=\"let admin of admins\">\r\n            {{admin.nome}}\r\n        </li>\r\n      </ul>      \r\n      <p>\r\n        <strong>Membros:</strong> {{grupo.emailMembros.length}}\r\n      </p>\r\n      <p>\r\n        <strong>Músicas no repertório:</strong> 0\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button (click)=\"detalhesGrupo()\">ENTRAR</button>      \r\n    </mat-card-actions>\r\n  </mat-card>\r\n  <br>"

/***/ }),

/***/ "./src/app/areas/grupos/card-grupo/card-grupo.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/areas/grupos/card-grupo/card-grupo.component.ts ***!
  \*****************************************************************/
/*! exports provided: CardGrupoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardGrupoComponent", function() { return CardGrupoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_interfaces_grupo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/interfaces/grupo.model */ "./src/app/interfaces/grupo.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_interfaces_grupo_model__WEBPACK_IMPORTED_MODULE_2__["Grupo"])
    ], CardGrupoComponent.prototype, "grupo", void 0);
    CardGrupoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-grupo',
            template: __webpack_require__(/*! ./card-grupo.component.html */ "./src/app/areas/grupos/card-grupo/card-grupo.component.html"),
            styles: [__webpack_require__(/*! ./card-grupo.component.css */ "./src/app/areas/grupos/card-grupo/card-grupo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CardGrupoComponent);
    return CardGrupoComponent;
}());



/***/ }),

/***/ "./src/app/areas/grupos/grupos.component.css":
/*!***************************************************!*\
  !*** ./src/app/areas/grupos/grupos.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topo-grupo{\r\n    height: 10vh;\r\n}\r\n\r\nmat-card{\r\n    margin-bottom: 1vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvZ3J1cG9zL2dydXBvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2dydXBvcy9ncnVwb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3BvLWdydXBve1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDF2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/areas/grupos/grupos.component.html":
/*!****************************************************!*\
  !*** ./src/app/areas/grupos/grupos.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [usuario]=\"currentUser\"></app-header>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-md-4\">\r\n        <img height=\"10%\" mat-card-image src=\"{{grupo.foto}}\" alt=\"foto de {{grupo.nome}}\">\r\n    </div> -->\r\n    <div class=\"col-md-12\">\r\n      <h1>{{grupo.nome}}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">          \r\n      <div class=\"col-lg-9\">\r\n          <mat-card>\r\n            <mat-card-content>\r\n                <mat-tab-group mat-stretch-tabs>\r\n                  <mat-tab label=\"Músicas\"> \r\n                   <app-musicas *ngIf=\"playlistDoGrupo\" [musicas]=\" playlistDoGrupo.musicas\"></app-musicas>\r\n                  </mat-tab>\r\n                  <mat-tab label=\"Repertórios\"> \r\n                    Content 2 \r\n                  </mat-tab>               \r\n                </mat-tab-group>\r\n            </mat-card-content>\r\n          </mat-card>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n            <mat-card>\r\n              <mat-card-title>Integrantes</mat-card-title>\r\n            </mat-card>\r\n            <mat-card>\r\n                <mat-card-title>Líderes</mat-card-title>\r\n              </mat-card>\r\n        </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/areas/grupos/grupos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/areas/grupos/grupos.component.ts ***!
  \**************************************************/
/*! exports provided: GruposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposComponent", function() { return GruposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_playlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/playlist.service */ "./src/app/services/playlist.service.ts");



var GruposComponent = /** @class */ (function () {
    function GruposComponent(playlistService) {
        this.playlistService = playlistService;
        this.currentUser = JSON.parse(localStorage.getItem('usuarioRP'));
        console.log("currentUser", this.currentUser);
    }
    GruposComponent.prototype.ngOnInit = function () {
        var _this = this;
        var grupoSelecionado = localStorage.getItem("grupo");
        console.log('grupo selec', grupoSelecionado);
        if (grupoSelecionado) {
            this.grupo = JSON.parse(grupoSelecionado);
        }
        this.playlistService.getPlayList(this.grupo.id).subscribe(function (res) {
            //console.log('getPlaylist: ', res.data);
            _this.playlistDoGrupo = res.data();
            localStorage.setItem("playlist", JSON.stringify(_this.playlistDoGrupo));
            console.log("PlaylistDoGrupo ", _this.playlistDoGrupo);
        });
    };
    GruposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grupos',
            template: __webpack_require__(/*! ./grupos.component.html */ "./src/app/areas/grupos/grupos.component.html"),
            styles: [__webpack_require__(/*! ./grupos.component.css */ "./src/app/areas/grupos/grupos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_playlist_service__WEBPACK_IMPORTED_MODULE_2__["PlaylistService"]])
    ], GruposComponent);
    return GruposComponent;
}());



/***/ }),

/***/ "./src/app/areas/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/areas/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/areas/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/areas/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [usuario]=\"usuario\"></app-header>\r\n<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\" *ngIf=\"showSpinner\">\r\n                <mat-spinner></mat-spinner>\r\n            </div>            \r\n            <div *ngIf=\"usuario\" class=\"col-md-12\">\r\n                <mat-card *ngIf=\"!showSpinner && gruposDoUsuario.length == 0\">                    \r\n                    <mat-card-content>                        \r\n                        <div *ngIf=\"gruposDoUsuario.length == 0\">\r\n                            <h4>Olá, {{usuario.nome}}!</h4>\r\n                            <p>\r\n                                Você ainda não participa de nenhuma banda ou grupo. Solicite ao administrador do seu grupo para \r\n                                lhe adicionar usando seu email (<strong>{{usuario.email}}</strong>) ou clique no botão abaixo para criar um novo grupo.\r\n                            </p>\r\n                            <button mat-raised-button color=\"primary\" (click)=\"openDialog()\"> CRIAR GRUPO </button>\r\n                        </div>                        \r\n                   </mat-card-content>                   \r\n                </mat-card>\r\n                <div class=\"row\" *ngIf=\"!showSpinner && gruposDoUsuario.length > 0\">\r\n                    <div class=\"col-md-12\">\r\n                        <h3>Meus grupos</h3>    \r\n                    </div>                   \r\n                    <div *ngFor=\"let grupo of gruposDoUsuario\" class=\"col-md-3\">\r\n                        <app-card-grupo [grupo]=\"grupo\"></app-card-grupo>\r\n                    </div>        \r\n                </div>\r\n            </div>            \r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/areas/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/areas/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_autenticacao_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/autenticacao/auth.service */ "./src/app/autenticacao/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_modals_criar_grupo_criar_grupo_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modals/criar-grupo/criar-grupo-modal.component */ "./src/app/modals/criar-grupo/criar-grupo-modal.component.ts");
/* harmony import */ var src_app_interfaces_grupo_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/interfaces/grupo.model */ "./src/app/interfaces/grupo.model.ts");
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuarios.service */ "./src/app/services/usuarios.service.ts");
/* harmony import */ var src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/grupos.service */ "./src/app/services/grupos.service.ts");
/* harmony import */ var src_app_services_playlist_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/playlist.service */ "./src/app/services/playlist.service.ts");










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
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.maxWidth = "100%";
        dialogConfig.minWidth = "70%";
        var dialogRef = this.dialogGrupo.open(src_app_modals_criar_grupo_criar_grupo_modal_component__WEBPACK_IMPORTED_MODULE_5__["CriarGrupoModalComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function (data) {
            console.log("Dialog output:", data);
            if (data) {
                _this.criarGrupo(data);
            }
        });
    };
    HomeComponent.prototype.criarOuAtualizarUsuario = function () {
        var _this = this;
        var loggedUser = JSON.parse(localStorage.getItem("usuario"));
        console.log("loggedUser", loggedUser);
        var tipoLogin = localStorage.getItem("tipoLogin");
        var fotoUrl = loggedUser.user.photoURL;
        if (tipoLogin === "facebook") {
            fotoUrl = fotoUrl + "?type=large";
        }
        this.usuario = {
            id: loggedUser.user.uid,
            email: loggedUser.user.email,
            urlFoto: fotoUrl,
            nome: loggedUser.user.displayName,
            idGrupos: [],
            papel: null,
            sexo: null,
        };
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
            localStorage.setItem("usuarioRP", JSON.stringify(_this.usuario));
            _this.obterGruposDoUsuario();
        });
    };
    HomeComponent.prototype.criarGrupo = function (data) {
        var _this = this;
        var grupo = new src_app_interfaces_grupo_model__WEBPACK_IMPORTED_MODULE_6__["Grupo"]();
        grupo.id = this.generateIdGrupo();
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
        this.playListService.createPlaylist(grupo.id).then(function (res) {
            console.log("PLAYLIST CRIADA");
        }, function (error) {
            console.error("OCORREU UM ERRO NA CRIAÇÂO DA PLAYLIST");
        });
        console.log("grupos do usuario: ", this.gruposDoUsuario);
    };
    HomeComponent.prototype.generateIdGrupo = function () {
        var hoje = new Date();
        return Math.random().toString(36).substring(2) + "_"
            + hoje.getDate() + hoje.getMonth() + hoje.getFullYear()
            + hoje.getSeconds() + hoje.getMilliseconds();
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
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/areas/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/areas/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_autenticacao_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["UsuariosService"],
            src_app_services_grupos_service__WEBPACK_IMPORTED_MODULE_8__["GruposService"],
            src_app_services_playlist_service__WEBPACK_IMPORTED_MODULE_9__["PlaylistService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/areas/landing/landing.component.css":
/*!*****************************************************!*\
  !*** ./src/app/areas/landing/landing.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    font-family:hind;\r\n}\r\n\r\nh1,h2,h3,h4,h5,h6{\r\n    font-family:montserrat;\r\n}\r\n\r\np{\r\n    font-size:17px;\r\n}\r\n\r\na{\r\n    border-bottom:2px solid;\r\n    padding: 3px;\r\n    text-decoration:none;\r\n}\r\n\r\na:hover{\r\n    text-decoration:none;\r\n}\r\n\r\na:active{\r\n    padding-top: 2px;\r\n}\r\n\r\na:visited {\r\n    border-bottom:2px solid;\r\n    padding: 3px;\r\n    text-decoration:none;\r\n}\r\n\r\na:focus {\r\n    border-bottom:2px solid;\r\n    text-decoration:none;\r\n}\r\n\r\n.link-white{\r\n    border-bottom:2px solid;\r\n    color:#ffffff;\r\n    text-decoration:none;\r\n}\r\n\r\n.link-white:hover{\r\n    color:#bdc3c7;\r\n    text-decoration:none;\r\n}\r\n\r\n.jumbotron-dark{\r\n    background-color:#333;\r\n    background-image:\r\n        url(\"https://i.imgur.com/2o6cukD.png\"),\r\n        linear-gradient(165deg, rgba(250, 250, 250, 0),\r\n        rgba(255, 255, 255, 0) 65%, rgba(38, 38, 38, 0.1) 65.1%,\r\n        rgba(38, 38, 38, 0.1));\r\n    color:#fff;\r\n}\r\n\r\n.jumbotron-dark-alt{\r\n    background-color:#333;\r\n    color:#fff;\r\n}\r\n\r\n.jumbotron-muted{\r\n    background-color:#ecf0f1;\r\n    background-image:\r\n        url(\"https://i.imgur.com/2o6cukD.png\"),\r\n        linear-gradient(165deg, rgba(250, 250, 250, 0),\r\n        rgba(255, 255, 255, 0) 65%, rgba(38, 38, 38, 0.1) 65.1%,\r\n        rgba(38, 38, 38, 0.1));\r\n}\r\n\r\n.jumbotron-primary{\r\n    /* background-color:#3498db; */\r\n    background-color:#007065;\r\n    /* background-image:\r\n        url(\"../../../assets/img/music-159865_960_720.png\"),    \r\n        linear-gradient(165deg,\r\n        rgba(255, 255, 255, 0),\r\n        rgba(255, 255, 255, 0) 65%, rgba(38, 38, 38, 0.1) 65.1%,\r\n        rgba(38, 38, 38, 0.1)); */\r\n        /*background-position: center; /* Center the image */\r\n        background-repeat: no-repeat; /* \r\n        background-size: cover; /* Resize the background image to cover the entire container */\r\n    color:#ffffff;\r\n}\r\n\r\n.jumbotron-success{\r\n    background-color:#2ecc71;\r\n    background-image:\r\n        url(\"https://i.imgur.com/2o6cukD.png\"),\r\n        linear-gradient(165deg,\r\n        rgba(255, 255, 255, 0),\r\n        rgba(255, 255, 255, 0) 65%,\r\n        rgba(38, 38, 38, 0.1) 65.1%,\r\n        rgba(38, 38, 38, 0.1));\r\n        color:#ffffff;\r\n}\r\n\r\n.jumbotron-info{\r\n    background-color:#9b59b6;\r\n    background-image:\r\n        url(\"https://i.imgur.com/2o6cukD.png\"),\r\n        linear-gradient(165deg, rgba(255, 255, 255, 0),\r\n        rgba(255, 255, 255, 0) 65%, rgba(38, 38, 38, 0.1) 65.1%,\r\n        rgba(38, 38, 38, 0.1));\r\n    color:#ffffff;\r\n}\r\n\r\n.jumbotron-warning{\r\n    background-color:#f39c12;\r\n    background-image:\r\n        url(\"https://i.imgur.com/2o6cukD.png\"),\r\n        linear-gradient(165deg,\r\n        rgba(255, 255, 255, 0),\r\n        rgba(255, 255, 255, 0) 65%,\r\n        rgba(38, 38, 38, 0.1) 65.1%,\r\n        rgba(38, 38, 38, 0.1));\r\n    color:#ffffff;\r\n}\r\n\r\n.jumbotron-danger{\r\n    background-color:#e74c3c;\r\n    background-image:\r\n        url('music-159865_960_720.png'),\r\n        linear-gradient(165deg,\r\n        rgba(255, 255, 255, 0),\r\n        rgba(255, 255, 255, 0) 65%,\r\n        rgba(38, 38, 38, 0.1) 65.1%,\r\n        rgba(38, 38, 38, 0.1));\r\n    color:#ffffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckI7Ozs7OEJBSTBCO0lBQzFCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7Ozs7OEJBSTBCO0FBQzlCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4Qjs7Ozs7aUNBSzZCO1FBQ3pCLG9EQUFvRDtRQUNwRCw0QkFBNEIsRUFBRTs4RkFDd0Q7SUFDMUYsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qjs7Ozs7OzhCQU0wQjtRQUN0QixhQUFhO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCOzs7OzhCQUkwQjtJQUMxQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCOzs7Ozs7OEJBTTBCO0lBQzFCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEI7Ozs7Ozs4QkFNMEI7SUFDMUIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FyZWFzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTpoaW5kO1xyXG59XHJcblxyXG5oMSxoMixoMyxoNCxoNSxoNntcclxuICAgIGZvbnQtZmFtaWx5Om1vbnRzZXJyYXQ7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6MTdweDtcclxufVxyXG5cclxuYXtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuYTphY3RpdmV7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG5hOnZpc2l0ZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuYTpmb2N1cyB7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcblxyXG4ubGluay13aGl0ZXtcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkO1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcblxyXG4ubGluay13aGl0ZTpob3ZlcntcclxuICAgIGNvbG9yOiNiZGMzYzc7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5cclxuLmp1bWJvdHJvbi1kYXJre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzMzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICB1cmwoXCJodHRwczovL2kuaW1ndXIuY29tLzJvNmN1a0QucG5nXCIpLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxNjVkZWcsIHJnYmEoMjUwLCAyNTAsIDI1MCwgMCksXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA2NSUsIHJnYmEoMzgsIDM4LCAzOCwgMC4xKSA2NS4xJSxcclxuICAgICAgICByZ2JhKDM4LCAzOCwgMzgsIDAuMSkpO1xyXG4gICAgY29sb3I6I2ZmZjtcclxufVxyXG5cclxuLmp1bWJvdHJvbi1kYXJrLWFsdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzMzMztcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24tbXV0ZWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2YwZjE7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgICAgIHVybChcImh0dHBzOi8vaS5pbWd1ci5jb20vMm82Y3VrRC5wbmdcIiksXHJcbiAgICAgICAgbGluZWFyLWdyYWRpZW50KDE2NWRlZywgcmdiYSgyNTAsIDI1MCwgMjUwLCAwKSxcclxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDY1JSwgcmdiYSgzOCwgMzgsIDM4LCAwLjEpIDY1LjElLFxyXG4gICAgICAgIHJnYmEoMzgsIDM4LCAzOCwgMC4xKSk7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24tcHJpbWFyeXtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IzM0OThkYjsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzA2NTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9tdXNpYy0xNTk4NjVfOTYwXzcyMC5wbmdcIiksICAgIFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxNjVkZWcsXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcclxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDY1JSwgcmdiYSgzOCwgMzgsIDM4LCAwLjEpIDY1LjElLFxyXG4gICAgICAgIHJnYmEoMzgsIDM4LCAzOCwgMC4xKSk7ICovXHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24tc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzJlY2M3MTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICAgICAgdXJsKFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS8ybzZjdWtELnBuZ1wiKSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTY1ZGVnLFxyXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA2NSUsXHJcbiAgICAgICAgcmdiYSgzOCwgMzgsIDM4LCAwLjEpIDY1LjElLFxyXG4gICAgICAgIHJnYmEoMzgsIDM4LCAzOCwgMC4xKSk7XHJcbiAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuLmp1bWJvdHJvbi1pbmZve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojOWI1OWI2O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICB1cmwoXCJodHRwczovL2kuaW1ndXIuY29tLzJvNmN1a0QucG5nXCIpLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxNjVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA2NSUsIHJnYmEoMzgsIDM4LCAzOCwgMC4xKSA2NS4xJSxcclxuICAgICAgICByZ2JhKDM4LCAzOCwgMzgsIDAuMSkpO1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuLmp1bWJvdHJvbi13YXJuaW5ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjM5YzEyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICB1cmwoXCJodHRwczovL2kuaW1ndXIuY29tLzJvNmN1a0QucG5nXCIpLFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxNjVkZWcsXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSxcclxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDY1JSxcclxuICAgICAgICByZ2JhKDM4LCAzOCwgMzgsIDAuMSkgNjUuMSUsXHJcbiAgICAgICAgcmdiYSgzOCwgMzgsIDM4LCAwLjEpKTtcclxuICAgIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24tZGFuZ2Vye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTc0YzNjO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL211c2ljLTE1OTg2NV85NjBfNzIwLnBuZ1wiKSxcclxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTY1ZGVnLFxyXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksXHJcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA2NSUsXHJcbiAgICAgICAgcmdiYSgzOCwgMzgsIDM4LCAwLjEpIDY1LjElLFxyXG4gICAgICAgIHJnYmEoMzgsIDM4LCAzOCwgMC4xKSk7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/areas/landing/landing.component.html":
/*!******************************************************!*\
  !*** ./src/app/areas/landing/landing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n  <nav class=\"navbar navbar-static-top\">\r\n    <div class=\"container\">\r\n      <!-- /.navbar-collapse -->\r\n      <!-- Navbar Right Menu -->\r\n      <div class=\"navbar-custom-menu\">\r\n        <ul class=\"nav navbar-nav\">\r\n        \r\n        </ul>\r\n      </div>\r\n      <!-- /.navbar-custom-menu -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n  </nav>\r\n</header>\r\n<div class=\"pad no-print\">\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"jumbotron jumbotron-primary\">\r\n    <div class=\"container\">\r\n      <div class=\"col-lg-6\">\r\n        <h2>Everything you need to know about SketchUp. Free!</h2>\r\n        <p class=\"lead\">Downloaded more than 30,000 times, this 100-page guide to SketchUp is a must-read for serious 3D\r\n          designers!</p>\r\n        <div class=\"input-group\">\r\n          <!-- <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\"> -->\r\n          <span class=\"input-group-btn\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"logarComFacebook()\">\r\n                <i class=\"fa fa-lg fa-fw fa-facebook-official\"></i>Entrar com Facebook</button>\r\n          </span>\r\n          <span class=\"input-group-btn\">\r\n            <button mat-raised-button color=\"warn\" (click)=\"logarComGoogle()\">\r\n                <i class=\"fa fa-lg fa-fw fa-google\"></i>Entrar com Google</button>\r\n          </span>\r\n        </div>\r\n        <br>\r\n        <!-- <small>By submitting this form, you agree to our <a class=\"link-white\" href=\"#!\" target=\"_blank\">Terms of Service\r\n            <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i></a> and <a class=\"link-white\" href=\"#!\"\r\n            target=\"_blank\">Privacy Policy <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i></a>.</small> -->\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <img class=\"img-responsive\" src=\"https://i.imgur.com/1Vm0su2.png\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/areas/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/areas/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_autenticacao_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/autenticacao/auth.service */ "./src/app/autenticacao/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LandingComponent = /** @class */ (function () {
    function LandingComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LandingComponent.prototype.ngOnInit = function () {
        if (this.auth.authenticated) {
            this.router.navigate(['/grupos']);
        }
    };
    LandingComponent.prototype.logarComFacebook = function () {
        var _this = this;
        this.auth.doFacebookLogin().then(function (res) {
            console.log("resultado login: ", res);
            localStorage.setItem("usuario", JSON.stringify(res));
            _this.router.navigate(['/grupos']);
        });
    };
    LandingComponent.prototype.logarComGoogle = function () {
        var _this = this;
        this.auth.doGoogleLogin().then(function (res) {
            console.log("resultado login: ", res);
            localStorage.setItem("usuario", JSON.stringify(res));
            _this.router.navigate(['/grupos']);
        });
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/areas/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/areas/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_autenticacao_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/areas/musicas/musicas.component.css":
/*!*****************************************************!*\
  !*** ./src/app/areas/musicas/musicas.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-cadastrar{\r\n    margin: 5px 0 7px 7px;\r\n}\r\n\r\n/* mat-card{\r\n    overflow: auto;\r\n} */\r\n\r\ntable {\r\n    width: 100%;\r\n    table-layout: fixed;\r\n    overflow: auto;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\n/* td, th {\r\n    width: 45%;\r\n} */\r\n\r\nth, td {\r\n    overflow: hidden;\r\n    width: 160px;\r\n    text-overflow: ellipsis;\r\n    white-space: pre-wrap;\r\n    margin-right: 35px;\r\n  }\r\n\r\n.filtro{\r\n    width: 40%;\r\n}\r\n\r\n.mat-row, .mat-header-row {  \r\n    min-width: 850px;  \r\n    width: 100%;  \r\n}\r\n\r\n/* th.th-nome div.mat-sort-header-container{\r\n    width: 500px;\r\n} */\r\n\r\n/* #mat-tab-content-0-0 > div > app-musicas > div.mat-elevation-z8 > table > thead > tr > th.th-nome.mat-header-cell.ng-tns-c11-3.cdk-column-nome.mat-column-nome.ng-star-inserted > div {\r\n    width: 150px;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJlYXMvbXVzaWNhcy9tdXNpY2FzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBR0E7O0dBRUc7O0FBQ0g7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hcmVhcy9tdXNpY2FzL211c2ljYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY2FkYXN0cmFye1xyXG4gICAgbWFyZ2luOiA1cHggMCA3cHggN3B4O1xyXG59XHJcblxyXG4vKiBtYXQtY2FyZHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59ICovXHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4gIFxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuICBcclxuLyogdGQsIHRoIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn0gKi9cclxuXHJcbnRoLCB0ZCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuLmZpbHRyb3tcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5tYXQtcm93LCAubWF0LWhlYWRlci1yb3cgeyAgXHJcbiAgICBtaW4td2lkdGg6IDg1MHB4OyAgXHJcbiAgICB3aWR0aDogMTAwJTsgIFxyXG59ICBcclxuXHJcblxyXG4vKiB0aC50aC1ub21lIGRpdi5tYXQtc29ydC1oZWFkZXItY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59ICovXHJcbi8qICNtYXQtdGFiLWNvbnRlbnQtMC0wID4gZGl2ID4gYXBwLW11c2ljYXMgPiBkaXYubWF0LWVsZXZhdGlvbi16OCA+IHRhYmxlID4gdGhlYWQgPiB0ciA+IHRoLnRoLW5vbWUubWF0LWhlYWRlci1jZWxsLm5nLXRucy1jMTEtMy5jZGstY29sdW1uLW5vbWUubWF0LWNvbHVtbi1ub21lLm5nLXN0YXItaW5zZXJ0ZWQgPiBkaXYge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/areas/musicas/musicas.component.html":
/*!******************************************************!*\
  !*** ./src/app/areas/musicas/musicas.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-cadastrar\">    \n    <mat-form-field class=\"filtro\">\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Procurar música\" autocomplete=\"off\">\n    </mat-form-field>\n    <div class=\"pull-right\">\n        <button mat-mini-fab color=\"primary\" (click)=\"openCriarMusicaDialog()\"><i class=\"fa fa-plus\"></i></button>\n        Adicionar Música\n    </div>             \n</div>\n<div *ngIf=\"!musicas\">\n    <p>Este grupo ainda não tem músicas cadastradas</p>\n</div>\n<div class=\"mat-elevation-z8\">\n\n    <table mat-table [dataSource]=\"dataSource\" matSort>    \n         <!-- Checkbox Column -->\n        <ng-container matColumnDef=\"select\">\n            <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                                [aria-label]=\"checkboxLabel()\">\n                </mat-checkbox>\n            </th>\n            <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                (change)=\"$event ? selection.toggle(row) : null\"\n                                [checked]=\"selection.isSelected(row)\"\n                                [aria-label]=\"checkboxLabel(row)\">\n                </mat-checkbox>\n            </td>\n        </ng-container>\n        <ng-container matColumnDef=\"nome\">\n            <th style=\"font-weight: bold;\" class=\"th-nome\" mat-header-cell *matHeaderCellDef mat-sort-header> Nome </th>\n            <td mat-cell class=\"th-nome\" *matCellDef=\"let row\"> {{row.nome}} </td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"artista\">\n            <th style=\"font-weight: bold\" mat-header-cell class=\"th-nome\" *matHeaderCellDef mat-sort-header> Artista </th>\n            <td mat-cell class=\"th-nome\" *matCellDef=\"let row\"> {{row.artista}} </td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"linkOuvir\">\n            <th style=\"font-weight: bold; width: 45px\" mat-header-cell *matHeaderCellDef mat-sort-header>Ouvir</th>\n            <td mat-cell *matCellDef=\"let row\">\n                <a *ngIf=\"row.linkOuvir\" href=\"{{row.linkOuvir}}\" target=\"_blank\"><i class=\"fa fa-play-circle fa-2x\" aria-hidden=\"true\"></i></a>              \n            </td>\n        </ng-container>\n        <ng-container matColumnDef=\"linkCifra\">\n            <th style=\"font-weight: bold; width: 45px\" mat-header-cell *matHeaderCellDef mat-sort-header> Link Cifra </th>\n            <td mat-cell *matCellDef=\"let row\">\n                <a *ngIf=\"row.linkCifra\" href=\"{{row.linkCifra}}\" target=\"_blank\"><img src=\"../../../assets/img/cifraclub.png\" height=\"31vh\" /> </a>         \n            </td>\n        </ng-container>\n        <ng-container matColumnDef=\"quantidadeVezesTocada\">\n            <th style=\"font-weight: bold; width: 75px;\" mat-header-cell *matHeaderCellDef mat-sort-header># Tocadas</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.quantidadeVezesTocada}} </td>\n        </ng-container>\n    \n        <ng-container matColumnDef=\"ultimaVezTocada\">\n            <th style=\"font-weight: bold; width: 100px\" mat-header-cell *matHeaderCellDef mat-sort-header>Ultima vez tocada</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.ultimaVezTocada}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"tags\">\n            <th style=\"font-weight: bold; width: 100px\" mat-header-cell *matHeaderCellDef mat-sort-header>Temas</th>\n            <td mat-cell *matCellDef=\"let row\"> {{row.tags}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    \n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100, 150]\"></mat-paginator>\n    </div>\n    <!-- <iframe src=\"https://open.spotify.com/embed/album/4dINu1pPco8xAJcJkg8U2J\" width=\"500\" height=\"280\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe> -->\n"

/***/ }),

/***/ "./src/app/areas/musicas/musicas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/areas/musicas/musicas.component.ts ***!
  \****************************************************/
/*! exports provided: MusicasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicasComponent", function() { return MusicasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_modals_criar_musica_criar_musica_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/criar-musica/criar-musica.component */ "./src/app/modals/criar-musica/criar-musica.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");






var MusicasComponent = /** @class */ (function () {
    function MusicasComponent(musicaDialog) {
        this.musicaDialog = musicaDialog;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.displayedColumns = ['nome', 'artista', 'linkOuvir', 'linkCifra', 'quantidadeVezesTocada', 'ultimaVezTocada', 'tags'];
    }
    MusicasComponent.prototype.ngOnInit = function () {
        if (this.dataSource) {
            this.dataSource.data = this.musicas;
        }
        else {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.musicas);
        }
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("Datasource 2: ", JSON.stringify(this.dataSource));
    };
    MusicasComponent.prototype.openCriarMusicaDialog = function () {
        var _this = this;
        console.log("Chamou o open dialog");
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.width = "70%";
        dialogConfig.height = "55%";
        var dialogRef = this.musicaDialog.open(src_app_modals_criar_musica_criar_musica_component__WEBPACK_IMPORTED_MODULE_3__["CriarMusicaComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(function () {
            setTimeout(function () {
                _this.musicas = JSON.parse(localStorage.getItem("playlist")).musicas;
                _this.dataSource.data = _this.musicas;
            }, 500);
        });
    };
    MusicasComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        console.log("selection", this.selection);
    };
    /** The label for the checkbox on the passed row */
    MusicasComponent.prototype.checkboxLabel = function (row) {
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.nome + 1);
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
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MusicasComponent.prototype, "musicas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MusicasComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], MusicasComponent.prototype, "sort", void 0);
    MusicasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-musicas',
            template: __webpack_require__(/*! ./musicas.component.html */ "./src/app/areas/musicas/musicas.component.html"),
            styles: [__webpack_require__(/*! ./musicas.component.css */ "./src/app/areas/musicas/musicas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MusicasComponent);
    return MusicasComponent;
}());



/***/ }),

/***/ "./src/app/areas/musicas/portuguese-paginator-intl.ts":
/*!************************************************************!*\
  !*** ./src/app/areas/musicas/portuguese-paginator-intl.ts ***!
  \************************************************************/
/*! exports provided: getPortuguesePaginatorIntl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPortuguesePaginatorIntl", function() { return getPortuguesePaginatorIntl; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");

var dutchRangeLabel = function (page, pageSize, length) {
    if (length == 0 || pageSize == 0) {
        return "0 de " + length;
    }
    length = Math.max(length, 0);
    var startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    var endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
    return startIndex + 1 + " - " + endIndex + " de " + length;
};
function getPortuguesePaginatorIntl() {
    var paginatorIntl = new _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatPaginatorIntl"]();
    paginatorIntl.itemsPerPageLabel = 'Itens por página:';
    paginatorIntl.nextPageLabel = 'Próx. página';
    paginatorIntl.previousPageLabel = 'Página anterior';
    paginatorIntl.getRangeLabel = dutchRangeLabel;
    return paginatorIntl;
}


/***/ }),

/***/ "./src/app/autenticacao/auth.service.ts":
/*!**********************************************!*\
  !*** ./src/app/autenticacao/auth.service.ts ***!
  \**********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return localStorage.getItem("usuario") != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            return this.afAuth.user;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.doFacebookLogin = function () {
        var _this = this;
        console.log("logando com facebook");
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider();
            provider.addScope('public_profile');
            provider.addScope('user_gender');
            provider.addScope('user_birthday');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                console.log("login bem sucedido");
                localStorage.setItem("tipoLogin", "facebook");
                resolve(res);
            }, function (err) {
                console.log("erro no login com facebook: ", err);
                reject(err);
            });
        });
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                //console.log("login google", res);
                localStorage.setItem("tipoLogin", "google");
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    AuthService.prototype.logout = function () {
        console.log("Chamou o logout");
        localStorage.removeItem("usuario");
        localStorage.removeItem("usuarioRP");
        localStorage.removeItem("grupo");
        localStorage.removeItem("tipoLogin");
        localStorage.removeItem("playlist");
        return this.afAuth.auth.signOut();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .user-image{\r\n    height: 30px !important;\r\n    width: 30px !important;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRyIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC51c2VyLWltYWdle1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\r\n    <nav class=\"navbar navbar-static-top\">\r\n      <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n          <a href=\"../../index2.html\" class=\"navbar-brand\"><b>Reper</b>Tore</a>\r\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n        </div>\r\n\r\n        <!-- Collect the nav links, forms, and other content for toggling -->\r\n        <div class=\"collapse navbar-collapse pull-left\" id=\"navbar-collapse\">\r\n          <ul class=\"nav navbar-nav\">\r\n            <!-- <li class=\"active\"><a href=\"#\">Link <span class=\"sr-only\">(current)</span></a></li>\r\n            <li><a href=\"#\">Link</a></li> -->\r\n            <!-- <li class=\"dropdown\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\" role=\"menu\">\r\n                <li><a href=\"#\">Action</a></li>\r\n                <li><a href=\"#\">Another action</a></li>\r\n                <li><a href=\"#\">Something else here</a></li>\r\n                <li class=\"divider\"></li>\r\n                <li><a href=\"#\">Separated link</a></li>\r\n                <li class=\"divider\"></li>\r\n                <li><a href=\"#\">One more separated link</a></li>\r\n              </ul>\r\n            </li> -->\r\n          </ul>\r\n          <!-- <form class=\"navbar-form navbar-left\" role=\"search\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control\" id=\"navbar-search-input\" placeholder=\"Search\">\r\n            </div>\r\n          </form> -->\r\n        </div>\r\n        <!-- /.navbar-collapse -->\r\n        <!-- Navbar Right Menu -->\r\n        <div class=\"navbar-custom-menu\">\r\n          <ul class=\"nav navbar-nav\">\r\n  \r\n\r\n            <!-- Notifications Menu -->\r\n            <li class=\"dropdown notifications-menu\">\r\n              <!-- Menu toggle button -->\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <i class=\"fa fa-bell-o\"></i>\r\n                <span class=\"label label-warning\">10</span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li class=\"header\">You have 10 notifications</li>\r\n                <li>\r\n                  <!-- Inner Menu: contains the notifications -->\r\n                  <ul class=\"menu\">\r\n                    <li><!-- start notification -->\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\r\n                      </a>\r\n                    </li>\r\n                    <!-- end notification -->\r\n                  </ul>\r\n                </li>\r\n                <li class=\"footer\"><a href=\"#\">View all</a></li>\r\n              </ul>\r\n            </li>\r\n            \r\n            \r\n            <!-- User Account Menu -->\r\n            <li *ngIf=\"usuario\" class=\"dropdown user user-menu\">\r\n              <!-- Menu Toggle Button -->\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                <!-- The user image in the navbar-->\r\n                <img src=\"{{usuario.urlFoto}}\" class=\"user-image\" alt=\"User Image\">\r\n                <!-- hidden-xs hides the username on small devices so only the image appears. -->\r\n                <span class=\"hidden-xs\">{{usuario.nome}}</span>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <!-- The user image in the menu -->\r\n                <li class=\"user-header\">\r\n                  <img src=\"{{usuario.urlFoto}}\" class=\"img-circle\" alt=\"User Image\">\r\n\r\n                  <p>\r\n                    {{usuario.nome}} - Guitarrista\r\n                    <small>Member since Nov. 2012</small>\r\n                  </p>\r\n                </li>\r\n                <!-- Menu Body -->\r\n                <!-- <li class=\"user-body\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-4 text-center\">\r\n                      <a href=\"#\">Followers</a>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text-center\">\r\n                      <a href=\"#\">Sales</a>\r\n                    </div>\r\n                    <div class=\"col-xs-4 text-center\">\r\n                      <a href=\"#\">Friends</a>\r\n                    </div>\r\n                  </div>\r\n                </li> -->\r\n                <!-- Menu Footer-->\r\n                <li class=\"user-footer\">\r\n                  <div class=\"pull-left\">\r\n                    <a href=\"#\" class=\"btn btn-default btn-flat\">Perfil</a>\r\n                  </div>\r\n                  <div class=\"pull-right\">\r\n                    <button (click)=\"sair()\" class=\"btn btn-default btn-flat\">Sair</button>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <!-- /.navbar-custom-menu -->\r\n      </div>\r\n      <!-- /.container-fluid -->\r\n    </nav>\r\n  </header>\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autenticacao_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autenticacao/auth.service */ "./src/app/autenticacao/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _interfaces_usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interfaces/usuario.model */ "./src/app/interfaces/usuario.model.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.sair = function () {
        var _this = this;
        this.auth.logout().then(function () {
            _this.router.navigate(['home']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _interfaces_usuario_model__WEBPACK_IMPORTED_MODULE_4__["Usuario"])
    ], HeaderComponent.prototype, "usuario", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_autenticacao_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/grupo.model.ts":
/*!*******************************************!*\
  !*** ./src/app/interfaces/grupo.model.ts ***!
  \*******************************************/
/*! exports provided: Grupo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grupo", function() { return Grupo; });
var Grupo = /** @class */ (function () {
    function Grupo() {
    }
    return Grupo;
}());



/***/ }),

/***/ "./src/app/interfaces/membrosPorGrupo.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/interfaces/membrosPorGrupo.model.ts ***!
  \*****************************************************/
/*! exports provided: MembrosPorGrupo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembrosPorGrupo", function() { return MembrosPorGrupo; });
var MembrosPorGrupo = /** @class */ (function () {
    function MembrosPorGrupo() {
    }
    return MembrosPorGrupo;
}());



/***/ }),

/***/ "./src/app/interfaces/usuario.model.ts":
/*!*********************************************!*\
  !*** ./src/app/interfaces/usuario.model.ts ***!
  \*********************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.idGrupos = new Array();
    }
    return Usuario;
}());



/***/ }),

/***/ "./src/app/modals/criar-grupo/criar-grupo-modal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modals/criar-grupo/criar-grupo-modal.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jcmlhci1ncnVwby9jcmlhci1ncnVwby1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modals/criar-grupo/criar-grupo-modal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modals/criar-grupo/criar-grupo-modal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Novo grupo</h2>\r\n<mat-dialog-content [formGroup]=\"formNovoGrupo\">\r\n  \r\n    <mat-form-field style=\"width: 100%\">\r\n        <input matInput\r\n              placeholder=\"Nome do grupo/banda\"\r\n              formControlName=\"nome\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- <label for=\"file\">Foto do grupo:</label>\r\n    <input type=\"file\" formControlName=\"foto\" (change)=\"getFotoRef($event)\" accept=\".png,.jpg\" /> -->\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n    <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n    <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button>\r\n</mat-dialog-actions>\r\n\r\n"

/***/ }),

/***/ "./src/app/modals/criar-grupo/criar-grupo-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modals/criar-grupo/criar-grupo-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: CriarGrupoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarGrupoModalComponent", function() { return CriarGrupoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_interfaces_grupo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/grupo.model */ "./src/app/interfaces/grupo.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





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
    CriarGrupoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-criar-grupo',
            template: __webpack_require__(/*! ./criar-grupo-modal.component.html */ "./src/app/modals/criar-grupo/criar-grupo-modal.component.html"),
            styles: [__webpack_require__(/*! ./criar-grupo-modal.component.css */ "./src/app/modals/criar-grupo/criar-grupo-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_interfaces_grupo_model__WEBPACK_IMPORTED_MODULE_3__["Grupo"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CriarGrupoModalComponent);
    return CriarGrupoModalComponent;
}());



/***/ }),

/***/ "./src/app/modals/criar-musica/criar-musica.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modals/criar-musica/criar-musica.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".half-width {\r\n    width: 32%;\r\n    margin: 0 5px 3px 5px;\r\n}\r\n\r\n.full-width{\r\n    width:100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL2NyaWFyLW11c2ljYS9jcmlhci1tdXNpY2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9tb2RhbHMvY3JpYXItbXVzaWNhL2NyaWFyLW11c2ljYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbGYtd2lkdGgge1xyXG4gICAgd2lkdGg6IDMyJTtcclxuICAgIG1hcmdpbjogMCA1cHggM3B4IDVweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGh7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modals/criar-musica/criar-musica.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modals/criar-musica/criar-musica.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Nova música</h2>\n<mat-dialog-content [formGroup]=\"formNovaMusica\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Nome da música\" formControlName=\"nome\" autocomplete=\"off\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-4\">\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Artista ou banda\" formControlName=\"artista\" autocomplete=\"off\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-4\">\n      <mat-form-field class=\"full-width\">\n        <input type=\"url\" matInput placeholder=\"Link p/ ouvir a música\" formControlName=\"linkOuvir\" autocomplete=\"off\">\n        <mat-hint  align=\"start\">Link da música no Youtube, Spotify, etc</mat-hint>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n        <mat-form-field class=\"full-width\">\n          <input type=\"url\"  matInput placeholder=\"Link Cifra\" formControlName=\"linkCifra\" autocomplete=\"off\">\n        </mat-form-field>\n      </div>\n    <div class=\"col-md-4\">\n      <mat-form-field class=\"full-width\">\n        <input matInput type=\"number\" placeholder=\"Qtd. de vezes tocada\" formControlName=\"quantidadeVezesTocada\" autocomplete=\"off\">\n        <mat-hint  align=\"start\">Qtd. real ou aproximada que a música já foi tocada</mat-hint>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-4\">\n      <mat-form-field class=\"full-width\"> \n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Ultima vez tocada\" formControlName=\"ultimaVezTocada\" autocomplete=\"off\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <mat-hint  align=\"start\">Se lembrar, especifique a data</mat-hint>\n      </mat-form-field>\n    </div>    \n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n          <mat-form-field class=\"full-width\">\n            <input matInput placeholder=\"Rítmo da Música\" formControlName=\"ritmo\" autocomplete=\"off\">\n          </mat-form-field>\n        </div>\n      <div class=\"col-md-8\">\n        <mat-form-field class=\"full-width\">\n            <mat-chip-list #chipList aria-label=\"Seleção de tags\">\n              <mat-chip *ngFor=\"let tag of tags\" [selectable]=\"selectable\"\n                        [removable]=\"removable\" (removed)=\"remove(tag)\">\n                {{tag}}\n                <mat-icon matChipRemove *ngIf=\"removable\">cancelar</mat-icon>\n              </mat-chip>\n              <input placeholder=\"Tags (separadas por vírgula)\"\n                      [matChipInputFor]=\"chipList\"\n                      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                      [matChipInputAddOnBlur]=\"addOnBlur\"\n                      (matChipInputTokenEnd)=\"add($event)\"\n                      formControlName=\"tags\" autocomplete=\"off\">\n            </mat-chip-list>\n          <!-- <input matInput placeholder=\"Tags (separadas por vírgula)\" formControlName=\"tags\" autocomplete=\"off\"> -->\n        </mat-form-field>\n      </div>\n        \n    </div>\n\n\n  <!-- <div class=\"row\">\n      <mat-form-field class=\"half-width\">\n          <input matInput placeholder=\"Ritmo\" formControlName=\"ritmo\" autocomplete=\"off\">\n        </mat-form-field>\n        <mat-form-field class=\"half-width\">\n          <input matInput placeholder=\"Link YouTube\" formControlName=\"linkVideo\" autocomplete=\"off\">\n        </mat-form-field>\n  </div> -->\n\n\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button class=\"mat-raised-button\" (click)=\"close()\">Fechar</button>\n  <button class=\"mat-raised-button mat-primary\" (click)=\"save()\">Salvar</button>\n  <button class=\"mat-raised-button mat-primary\" (click)=\"saveAndContinue()\">Salvar e cadastrar outra</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/modals/criar-musica/criar-musica.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modals/criar-musica/criar-musica.component.ts ***!
  \***************************************************************/
/*! exports provided: CriarMusicaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriarMusicaComponent", function() { return CriarMusicaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_playlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/playlist.service */ "./src/app/services/playlist.service.ts");






var CriarMusicaComponent = /** @class */ (function () {
    function CriarMusicaComponent(dialogRef, data, fb, playlistService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.playlistService = playlistService;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["COMMA"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ENTER"]];
        this.tags = [];
        this.formNovaMusica = this.fb.group({
            id: '',
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            artista: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
    };
    CriarMusicaComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CriarMusicaComponent.prototype.save = function () {
        this.addSongToPlaylist();
        this.dialogRef.close();
    };
    CriarMusicaComponent.prototype.saveAndContinue = function () {
        this.addSongToPlaylist();
        this.formNovaMusica.reset();
    };
    CriarMusicaComponent.prototype.addSongToPlaylist = function () {
        var musica = this.criarMusica();
        this.playListDoGrupo.musicas.push(musica);
        localStorage.setItem("playlist", JSON.stringify(this.playListDoGrupo));
        this.playlistService.addSongToPlaylist(this.playListDoGrupo).then(function (resAddSong) {
            console.log("musica adiciona a playlist ", musica);
        });
    };
    CriarMusicaComponent.prototype.criarMusica = function () {
        console.log("tags", this.tags);
        var novaMusica = {
            id: "musica",
            artista: this.formNovaMusica.value.artista,
            nome: this.formNovaMusica.value.nome,
            linkCifra: this.formNovaMusica.value.linkCifra,
            linkOuvir: this.formNovaMusica.value.linkOuvir,
            ritmo: this.formNovaMusica.value.ritmo,
            tags: this.tags.join(", "),
            quantidadeVezesTocada: this.formNovaMusica.value.quantidadeVezesTocada,
            ultimaVezTocada: this.formNovaMusica.value.ultimaVezTocada
        };
        return novaMusica;
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
    CriarMusicaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-criar-musica',
            template: __webpack_require__(/*! ./criar-musica.component.html */ "./src/app/modals/criar-musica/criar-musica.component.html"),
            styles: [__webpack_require__(/*! ./criar-musica.component.css */ "./src/app/modals/criar-musica/criar-musica.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_playlist_service__WEBPACK_IMPORTED_MODULE_5__["PlaylistService"]])
    ], CriarMusicaComponent);
    return CriarMusicaComponent;
}());



/***/ }),

/***/ "./src/app/services/grupos.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/grupos.service.ts ***!
  \********************************************/
/*! exports provided: GruposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GruposService", function() { return GruposService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _interfaces_membrosPorGrupo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interfaces/membrosPorGrupo.model */ "./src/app/interfaces/membrosPorGrupo.model.ts");




var GruposService = /** @class */ (function () {
    function GruposService(firestore) {
        this.firestore = firestore;
    }
    GruposService.prototype.createGroup = function (grupo) {
        return this.firestore.collection('grupos').doc(grupo.id).set(JSON.parse(JSON.stringify(grupo)));
    };
    GruposService.prototype.getUserGroups = function (emailUsuario) {
        return this.firestore.collection('grupos', function (ref) { return ref.where('emailMembros', 'array-contains', emailUsuario); }).valueChanges();
    };
    GruposService.prototype.associateUserToGroup = function (idGrupo, usuario) {
        var _this = this;
        var jaTemAssoc;
        var associacao;
        var sub = this.firestore.collection('usuariosPorGrupo', function (ref) { return ref.where('idGrupo', '==', idGrupo); }).valueChanges().subscribe(function (ass) {
            if (ass.length == 0) {
                jaTemAssoc = false;
                sub.unsubscribe();
                console.log("jaTemAssoc", jaTemAssoc);
                console.log("associacao", associacao);
                associacao = new _interfaces_membrosPorGrupo_model__WEBPACK_IMPORTED_MODULE_3__["MembrosPorGrupo"]();
                associacao.idGrupo = idGrupo;
                associacao.usuarios = [usuario];
                _this.firestore.collection('usuariosPorGrupo').doc(idGrupo).set(JSON.parse(JSON.stringify(associacao))).then(function (res) {
                    console.log("Usuário associado ao grupo");
                });
            }
            else {
                jaTemAssoc = true;
                console.log("jaTemAssoc", jaTemAssoc);
                console.log("associacao", associacao);
                sub.unsubscribe();
                console.log("ASSOC", ass[0]);
                if (!associacao.usuarios.includes(usuario)) {
                    associacao.idGrupo = idGrupo;
                    associacao.usuarios.push(usuario);
                    _this.firestore.doc('usuariosPorGrupo/' + idGrupo).update(associacao).then(function (res) {
                        console.log("Usuário associado ao grupo");
                    });
                }
            }
        });
    };
    GruposService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], GruposService);
    return GruposService;
}());



/***/ }),

/***/ "./src/app/services/playlist.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/playlist.service.ts ***!
  \**********************************************/
/*! exports provided: PlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistService", function() { return PlaylistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var PlaylistService = /** @class */ (function () {
    function PlaylistService(firestore) {
        this.firestore = firestore;
    }
    PlaylistService.prototype.createPlaylist = function (grupoId) {
        var playlist = {
            idGrupo: grupoId,
            musicas: []
        };
        return this.firestore.collection('playlists').doc(grupoId).set(playlist);
    };
    PlaylistService.prototype.getPlayList = function (idGrupo) {
        return this.firestore.doc('playlists/' + idGrupo).get();
    };
    PlaylistService.prototype.addSongToPlaylist = function (playlist) {
        return this.firestore.doc('playlists/' + playlist.idGrupo).update(playlist);
    };
    PlaylistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], PlaylistService);
    return PlaylistService;
}());



/***/ }),

/***/ "./src/app/services/usuarios.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var UsuariosService = /** @class */ (function () {
    function UsuariosService(firestore) {
        this.firestore = firestore;
    }
    UsuariosService.prototype.createUser = function (usuario) {
        return this.firestore.collection('usuarios').doc(usuario.id).set(usuario);
    };
    UsuariosService.prototype.getUsers = function () {
        return this.firestore.collection('usuarios').snapshotChanges();
    };
    UsuariosService.prototype.getUserByEmail = function (email) {
        return this.firestore.collection('usuarios', function (ref) { return ref.where('email', '==', email); }).valueChanges();
    };
    UsuariosService.prototype.updateUser = function (usuario) {
        delete usuario.id;
        this.firestore.doc('usuarios/' + usuario.id).update(usuario);
    };
    UsuariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], UsuariosService);
    return UsuariosService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDx6NatdMhbvB4J1wrCmekbFkux33L3myo",
        authDomain: "playlist-manager-c5763.firebaseapp.com",
        databaseURL: "https://playlist-manager-c5763.firebaseio.com",
        projectId: "playlist-manager-c5763",
        storageBucket: "playlist-manager-c5763.appspot.com",
        messagingSenderId: "914665848507",
        appId: "1:914665848507:web:e685a8f58f63ea38"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ewerton.w.da.silva\Documents\Repertorios\playlist-manager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map