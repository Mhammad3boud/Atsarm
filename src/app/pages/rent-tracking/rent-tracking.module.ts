import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentTrackingPageRoutingModule } from './rent-tracking-routing.module';

import { RentTrackingPage } from './rent-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentTrackingPageRoutingModule
  ],
  declarations: [RentTrackingPage]
})
export class RentTrackingPageModule {}
