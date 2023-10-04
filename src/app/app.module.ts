import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MoviesModule } from './movies/movies.module';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { EditarComponent } from './editar/editar.component';
import { SidenavVComponent } from './sidenav-v/sidenav-v.component';
@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    ListarComponent,
    BuscarComponent,
    EditarComponent,
    SidenavVComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MoviesModule,
    DashboardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
