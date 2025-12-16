import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';
import { ProfileImageModalComponent } from '../../components/profile-image-modal/profile-image-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ProfileImageModalComponent]
})
export class DashboardPage implements OnInit {
  userName: string = 'MOHAMMED ABOUD HUSSEIN';
  role: string = 'Owner';
  notificationCount: number = 2;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController
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
  async openProfile() {
    const modal = await this.modalController.create({
      component: ProfileImageModalComponent,
      cssClass: 'profile-image-modal',
      componentProps: {
        imageUrl: 'https://ionicframework.com/docs/img/demos/avatar.svg'
      }
    });
    return await modal.present();
  }
  
  async openAddProperty() {
    this.router.navigate(['/tabs/assets']);
  }

  async openAddTenant() {
    this.router.navigate(['/tabs/tenants']);
  }

  async openRecordPayment() {
    this.router.navigate(['/tabs/contracts']);
  }
}

