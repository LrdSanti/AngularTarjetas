import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MoviesModule } from './movies/movies.module';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';
import { DashtarjetaModule } from './dashtarjeta/dashtarjeta.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MoviesModule,
    DashboardModule,  
    FormsModule,
    DashtarjetaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
