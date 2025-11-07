import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.scss'],
  standalone: false
})
export class AddAssetComponent {
  asset = {
    assetType: 'Property',
    region: '',
    district: '',
    ward: '',
    blockNo: '',
    plotNo: '',
    houseNo: '',
    street: '',
    postcode: '',
    areaName: '',
    ownerName: '',
    ownerPhone: '',
    ownerEmail: '',
    usage: 'Rented',
    waterMeter: '',
    electricityMeter: '',
    gpsLatitude: '',
    gpsLongitude: ''
  };

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }

  addAsset() {
    console.log('Asset Added:', this.asset);
    this.modalCtrl.dismiss(this.asset);
  }
}
