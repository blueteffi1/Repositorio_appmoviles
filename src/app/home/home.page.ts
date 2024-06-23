import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  segmentModel: string = 'opcion1';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';
  user: string = '';

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre') || '';
    this.apellido = localStorage.getItem('apellido') || '';
  }

  guardardatos() {
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('apellido', this.apellido);
  }

  clearInput(inputName: string) {
    (this as any)[inputName] = '';
  }

  async mostrar() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.nombre} Apellido: ${this.apellido}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  segmentChanged(event: any) {
    this.segmentModel = event.detail.value;
  }
}
