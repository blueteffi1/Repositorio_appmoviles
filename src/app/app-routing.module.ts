import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'pendientes',
    loadChildren: () => import('./pages/pendientes/pendientes.module').then( m => m.PendientesPageModule)
  },
  {
    path: 'detalles',
    loadChildren: () => import('./pages/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'edicion',
    loadChildren: () => import('./pages/edicion/edicion.module').then( m => m.EdicionPageModule)
  },
  {
    path: 'emociones',
    loadChildren: () => import('./pages/emociones/emociones.module').then( m => m.EmocionesPageModule)
  },

  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'apirest',
    loadChildren: () => import('./pages/apirest/apirest.module').then( m => m.ApirestPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
