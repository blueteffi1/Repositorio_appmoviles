import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    if (this.isValidUsername(this.username) && this.isValidPassword(this.password)) {
      
      this.router.navigate(['/home'], {
        state: { user: this.username }
      });
    } else {
      
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'El nombre de usuario debe ser alfanumérico y tener entre 3 y 8 caracteres. La contraseña debe ser numérica y tener 4 dígitos.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  isValidUsername(username: string): boolean {
    const usernamePattern = /^[a-zA-Z0-9]{3,8}$/;
    return usernamePattern.test(username);
  }

  isValidPassword(password: string): boolean {
    const passwordPattern = /^[0-9]{4}$/;
    return passwordPattern.test(password);
  }
}
