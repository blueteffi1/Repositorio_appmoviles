import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicioDBService } from 'src/app/service/servicio-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  nombre: any = '';
  apellido: any = '';
  usuario: any = '';
  password: any = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private servicioDBService: ServicioDBService
  ) {}

  async login() {
    const usuario = await this.servicioDBService.validarUsuario(
      this.usuario,
      this.password
    );
    if (usuario) {
      let NavigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.usuario,
          passwordEnviado: this.password,
        },
      };
      this.router.navigate(['/home'], NavigationExtras);
    } else {
      this.presentAlert('No existe el usuario en la base datos');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  crear_cuenta() {
    this.router.navigate(['/registro']);
  }
}
