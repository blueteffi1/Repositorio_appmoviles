import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
 

  nombre: string = "";
  apellido: string = "";
  nivelEducacion: string = "";
  fechaNacimiento: string = "";

  user: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.route.queryParams.subscribe(params => {
      const navigation = this.router.getCurrentNavigation();
      if (navigation?.extras?.state) {
        this.user = navigation.extras.state['user'] ?? '';
      }
    });
  }

 ngOnInit() {
  
    
  }

  clearInput(inputName: string) {
    (this as any)[inputName] = '';
    const inputElement = document.getElementById(inputName);
    if (inputElement) {
      inputElement.classList.add('input-animation');
      setTimeout(() => {
        inputElement.classList.remove('input-animation');
      }, 1000);
    }
  }

  async mostrar() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: `Nombre: ${this.nombre} Apellido: ${this.apellido}`,
      buttons: ['OK']
    });

    await alert.present();
  }
}
