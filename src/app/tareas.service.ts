import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private tareas = [
    { nombre: 'Hacer la compra', completada: false },
    { nombre: 'Llamar al médico', completada: true },
    { nombre: 'Estudiar para el examen', completada: false },
    { nombre: 'Sacar a pasear a la mascota', completada: false },
    { nombre: 'Desayunar', completada: false },
    { nombre: 'Almorzar', completada: false },
  ];

  getTareas() {
    return this.tareas;
  }

  getTareasCompletadas() {
    return this.tareas.filter(tarea => tarea.completada);
  }

  getTareasPendientes() {
    return this.tareas.filter(tarea => !tarea.completada);
  }


  agregarTarea(nombre: string) {
    this.tareas.push({ nombre, completada: false });
  }

  eliminarTarea(index: number) {
    this.tareas.splice(index, 1);
  }

  marcarComoCompletada(tarea: any) {
    tarea.completada = !tarea.completada;
  }
}
