import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PendientesPage } from './pendientes.page';
import { MiComponenteComponent } from '../../componentes/mi-componente/mi-componente.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PendientesPage
      }
    ])
  ],
  declarations: [PendientesPage]
})
export class PendientesPageModule {}
