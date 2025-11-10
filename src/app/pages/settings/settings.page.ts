import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false
})
export class SettingsPage {
  darkMode = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private location: Location
  ) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.darkMode = savedTheme === 'dark';
      document.body.classList.toggle('dark', this.darkMode);
    } else {
      this.darkMode = document.body.classList.contains('dark');
    }
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.darkMode);
    localStorage.setItem('theme', this.darkMode ? 'dark' : 'light');
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Logout',
          handler: () => {
            const theme = localStorage.getItem('theme');
            localStorage.clear();
            if (theme) {
              localStorage.setItem('theme', theme);
            }
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await alert.present();
  }
}
