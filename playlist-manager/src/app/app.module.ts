import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from 'angular-admin-lte';
import { HomeComponent } from './componentes/home/home.component';
import { adminLteConf } from './admin-lte.conf';
import { HeaderComponent } from './componentes/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorIntl, MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';


import { LandingComponent } from './componentes/landing/landing.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireDatabase } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AuthService } from './autenticacao/auth.service';
import { CriarGrupoModalComponent } from './componentes/grupo/modals/criar-grupo/criar-grupo-modal.component';
import { CardGrupoComponent } from './componentes/grupo/card-grupo/card-grupo.component';
import { GrupoComponent } from './componentes/grupo/grupo.component';
import { UsuariosService } from './componentes/usuario/services/usuarios.service';
import { MusicasComponent } from './componentes/musicas/musicas.component';
import { CriarMusicaComponent } from './componentes/musicas/modals/criar-musica/criar-musica.component';
import { getPortuguesePaginatorIntl } from './componentes/musicas/portuguese-paginator-intl';
import { RepertoriosComponent } from './componentes/repertorios/repertorios.component';
import { ExcluirMusicaModalComponent } from './shared/modals/excluir-musica-modal/excluir-musica-modal.component';
import { EditarMusicaModalComponent } from './componentes/musicas/modals/editar-musica-modal/editar-musica-modal.component';
import { EditarRepertorioModalComponent } from './componentes/repertorios/modals/editar-repertorio-modal/editar-repertorio-modal.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LandingComponent,
    CriarGrupoModalComponent,
    CardGrupoComponent,
    GrupoComponent,
    MusicasComponent,
    CriarMusicaComponent,
    RepertoriosComponent,
    ExcluirMusicaModalComponent,
    EditarMusicaModalComponent,
    EditarRepertorioModalComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf),
    BrowserAnimationsModule,
    ReactiveFormsModule,    
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatBadgeModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService, 
    UsuariosService,  
    {provide: MatPaginatorIntl, useValue: getPortuguesePaginatorIntl() },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CriarGrupoModalComponent, 
    CriarMusicaComponent,
    ExcluirMusicaModalComponent,
    EditarMusicaModalComponent
  ]
})
export class AppModule { }
