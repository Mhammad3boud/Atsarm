import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generate-contract-modal',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './generate-contract-modal.component.html',
  styleUrls: ['./generate-contract-modal.component.scss'],
})
export class GenerateContractModalComponent implements OnInit {
  @Input() preset?: Partial<{
    tenantName: string;
    propertyNumber: string;
    unitNumber: string;
    propertyAddress: string;
    leaseStartDate: string;
    leaseEndDate: string;
    monthlyRent: number;
    securityDeposit: number;
    ownerName: string;
    ownerAddress: string;
    specialTerms: string;
  }>;
  tenantName = '';
  propertyNumber = 'P-123';
  unitNumber = '2A';
  propertyAddress = '';
  leaseStartDate: string = '';
  leaseEndDate: string = '';
  monthlyRent = 1200;
  securityDeposit = 2400;
  ownerName = 'Property Owner';
  ownerAddress = '123 Main St, City, State 12345';
  specialTerms = '';

  today = new Date().toISOString().split('T')[0];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    if (this.preset) {
      this.tenantName = this.preset.tenantName ?? this.tenantName;
      this.propertyNumber = this.preset.propertyNumber ?? this.propertyNumber;
      this.unitNumber = this.preset.unitNumber ?? this.unitNumber;
      this.propertyAddress = this.preset.propertyAddress ?? this.propertyAddress;
      this.leaseStartDate = this.preset.leaseStartDate ?? this.leaseStartDate;
      this.leaseEndDate = this.preset.leaseEndDate ?? this.leaseEndDate;
      this.monthlyRent = this.preset.monthlyRent ?? this.monthlyRent;
      this.securityDeposit = this.preset.securityDeposit ?? this.securityDeposit;
      this.ownerName = this.preset.ownerName ?? this.ownerName;
      this.ownerAddress = this.preset.ownerAddress ?? this.ownerAddress;
      this.specialTerms = this.preset.specialTerms ?? this.specialTerms;
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  generateContract() {
    this.modalCtrl.dismiss({
      tenantName: this.tenantName,
      propertyNumber: this.propertyNumber,
      unitNumber: this.unitNumber,
      leaseStartDate: this.leaseStartDate,
      leaseEndDate: this.leaseEndDate,
      monthlyRent: this.monthlyRent,
      securityDeposit: this.securityDeposit,
    });
  }
}
