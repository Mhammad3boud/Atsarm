import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-tenant-modal',
  templateUrl: './add-tenant-modal.component.html',
  styleUrls: ['./add-tenant-modal.component.scss'],
  standalone: false,
})
export class AddTenantModalComponent {
  tenant = {
    fullName: '',
    email: '',
    phoneNumber: '',
    propertyNumber: '',
    unitNumber: '',
    monthlyRent: '',
    leaseStart: '',
    leaseEnd: '',
    renewalReminder: '',
    emergencyContact: '',
    address: ''
  };

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    this.modalCtrl.dismiss();
  }

  addTenant() {
    console.log('Tenant Added:', this.tenant);
    this.modalCtrl.dismiss(this.tenant);
  }
}
