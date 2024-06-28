import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ServicioDBService } from 'src/app/service/servicio-db.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  nombre: any = '';
  apellido: any = '';
  usuario: any = '';
  password: any = '';

  usuarioRecibidoPersistente: any = '';

  isDBReady: boolean = false;

  constructor(private alertController: AlertController,
              private servicioDBService : ServicioDBService,
              private router: Router,
  ) {}

  async registrarUsuario() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '' || this.usuario.trim() === '' || this.password.trim() === '') {
      this.presentAlert('Error: Todos los campos son obligatorios');
      return;
    }

    
    
    this.resetFormulario();
  }

  ngOnInit(){
    this.servicioDBService.getIsDBReady().subscribe(isReady =>{
      this.isDBReady = isReady;
      if(isReady){

      }
    })
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  resetFormulario() {
    this.nombre = '';
    this.apellido = '';
    this.usuario = '';
    this.password = '';
  }

  guardar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === ''|| this.usuario.trim() === '' || this.password.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacios');
    } else {
      this.guardarDatos();  
    } 
  }

  guardarDatos() {
    this.servicioDBService.insertUsuario(this.nombre, this.apellido, this.usuario, this.password)
      .then(() => {
        this.presentAlert('Datos guardados exitosamente');

        this.router.navigate(['/login']);
      })
      .catch(error => {
        this.presentAlert('Error al guardar datos: ' + error);
      });
  }

  login() {
    this.router.navigate(['/login']);
  }

}
