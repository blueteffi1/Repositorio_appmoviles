import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrls: ['./mi-componente.component.scss'],
})
export class MiComponenteComponent {
  @Input() nombre: string = '';
  @Input() apellido: string = '';
}
