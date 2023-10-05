import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListarComponent } from './listar/listar.component';
// import { BuscarComponent } from './buscar/buscar.component';
import { EditarComponent } from './editar/editar.component';
import { DashtarjetaComponent } from './dashtarjeta/dashtarjeta/dashtarjeta.component';
import { MoviesModule } from './movies/movies.module';

const routes: Routes = [

  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },

  {
    path: 'dashtarjeta', component: DashtarjetaComponent,
    children: [
      { path:'', redirectTo:'dashtarjeta/listar', pathMatch: 'full' },
      {path: 'listar', loadChildren:()=>import('./listar/listar.module').then(m => m.ListarModule)},
      { path: 'agregar', loadChildren: () => import('./agregar/agregar.module').then(m => m.AgregarModule) },
      { path: 'editar', loadChildren: () => import('./editar/editar.module').then(m => m.EditarModule) }
    ]
  },


  // {
  //   path: 'dashboard', component: DashboardComponent,
  //   children: [
  //     /**IMPORTANTE: cuando la aplicacion cargue la ruta
  //      * http://localhost:4200/dashboard lo vamos a redireccionar a su hijo: movies
  //      * */
  //     {
  //       path: '', redirectTo: '/dashboard/movies', pathMatch: 'full'
  //     },
  //     {
  //       path: 'movies', loadChildren: () => import('./movies/movies.module').then(m=>m.MoviesModule)
  //     },
  //     {
  //       path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
