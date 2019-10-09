import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './areas/home/home.component';
import { LandingComponent } from './areas/landing/landing.component';
import { GruposComponent } from './areas/grupos/grupos.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: LandingComponent},
  {path: 'grupos', component: HomeComponent},
  {path: 'detalhe-grupo', component: GruposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
