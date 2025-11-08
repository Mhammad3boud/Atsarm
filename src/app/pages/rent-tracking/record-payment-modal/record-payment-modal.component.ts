import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-record-payment-modal',
  standalone: true,
  // ✅ these imports make Ionic elements and [(ngModel)] work
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './record-payment-modal.component.html',
  styleUrls: ['./record-payment-modal.component.scss'],
})
export class RecordPaymentModalComponent implements OnInit {
  @Input() preset?: Partial<typeof this.payment>;
  payment = {
    tenantName: '',
    propertyNumber: '',
    unitNumber: '',
    month: '',
    amount: '',
    dueDate: '',
    paidDate: '',
    paymentMethod: ''
  };

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    if (this.preset) {
      this.payment = {
        ...this.payment,
        ...this.preset,
      } as any;
    }
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  addPayment() {
    console.log('✅ Payment recorded:', this.payment);
    this.modalCtrl.dismiss(this.payment);
  }
}
