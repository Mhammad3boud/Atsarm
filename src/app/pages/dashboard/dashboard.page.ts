import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {
  userName: string = 'MOHAMMED ABOUD HUSSEIN';
  role: string = 'Owner';
  notificationCount: number = 2;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async logout() {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Logout',
          handler: () => {
            localStorage.clear();
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }

  openSettings() {
    this.router.navigate(['/settings']);
  }

  openNotifications() {
    this.router.navigate(['/notifications']);
  }
  doRefresh(event:any){     
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    });
  }
  openProfile() {
    console.log('Profile clicked');
  } 
  
}

