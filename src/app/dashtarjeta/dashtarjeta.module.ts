import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashtarjetaRoutingModule } from './dashtarjeta-routing.module';
import { DashtarjetaComponent } from './dashtarjeta/dashtarjeta.component';
import { SidenavVModule } from '../sidenav-v/sidenav-v.module';


@NgModule({
  declarations: [
    DashtarjetaComponent,
    
  ],
  imports: [
    CommonModule,
    DashtarjetaRoutingModule,
    SidenavVModule
  ], exports: [
    DashtarjetaComponent
  ]
})
export class DashtarjetaModule { }
