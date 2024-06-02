import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/tareas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  tareasCompletadas: any[] = [];
  tareasPendientes: any[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit() {
    this.tareasCompletadas = this.tareasService.getTareasCompletadas();
    this.tareasPendientes = this.tareasService.getTareasPendientes();
  }
}
