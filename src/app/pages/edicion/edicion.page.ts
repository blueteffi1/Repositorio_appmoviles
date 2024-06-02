import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.page.html',
  styleUrls: ['./edicion.page.scss'],
})
export class EdicionPage implements OnInit {
  tareas!: any[];
  nuevaTarea: string = '';

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.tareas = this.tareasService.getTareas();
  }

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareasService.agregarTarea(this.nuevaTarea);
      this.nuevaTarea = ''; 
    }
  }

  eliminarTarea(index: number) {
    this.tareasService.eliminarTarea(index);
  }
}
