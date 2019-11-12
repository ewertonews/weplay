import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { GrupoComponent } from './componentes/grupo/grupo.component';
import { NovoIntegranteComponent } from './componentes/novo-integrante/novo-integrante.component';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: LandingComponent },
    { path: 'grupos', component: HomeComponent },
    { path: 'detalhe-grupo', component: GrupoComponent },
    { path: 'adicionar-integrante', component: NovoIntegranteComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map