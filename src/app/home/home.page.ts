import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  password: string = '';
  confirmPassword: string = '';
  toastMessage: string = '';

  constructor(private toastController: ToastController) {}

  async validatePasswords() {
    if (this.password === this.confirmPassword) {
      this.toastMessage = 'Las contraseñas coinciden.';
    } else {
      this.toastMessage = 'Las contraseñas no coinciden.';
    }
    this.showToast();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.toastMessage,
      duration: 2000
    });
    toast.present();
  }
}
