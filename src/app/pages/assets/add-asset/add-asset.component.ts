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

  locating = false;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss();
  }

  addAsset() {
    console.log('Asset Added:', this.asset);
    this.modalCtrl.dismiss(this.asset);
  }

  async useCurrentLocation() {
    if (!('geolocation' in navigator)) {
      console.warn('Geolocation is not supported by this browser.');
      return;
    }
    this.locating = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        this.asset.gpsLatitude = latitude.toString();
        this.asset.gpsLongitude = longitude.toString();
        this.locating = false;
      },
      (err) => {
        console.error('Failed to get location', err);
        this.locating = false;
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  }
}
