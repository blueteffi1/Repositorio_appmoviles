import { Component } from '@angular/core';
import { TareasService } from 'src/app/tareas.service'; // Verifica la ruta

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage {
  tareas: any[];

  constructor(private tareasService: TareasService) {
    this.tareas = this.tareasService.getTareas();
  }

  marcarComoCompletada(tarea: any) {
    this.tareasService.marcarComoCompletada(tarea);
  }
}
