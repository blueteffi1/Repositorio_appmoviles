import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Home', url: '/home', icon: 'heart' },
    { title: 'Lista de Tareas ~', url: 'pendientes', icon: 'bookmarks' },
    { title: 'Detalles de Tarea', url: 'detalles', icon: 'document' },
    { title: 'Creación/Edición de Tareas', url: 'edicion', icon: 'create' },
    { title: 'Fun', url: 'emociones', icon: 'happy' },
    { title: 'Cerrar sesiión', url: 'login', icon: 'heart' },


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
