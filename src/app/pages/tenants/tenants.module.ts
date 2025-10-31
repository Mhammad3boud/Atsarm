import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TenantsPageRoutingModule } from './tenants-routing.module';

import { TenantsPage } from './tenants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TenantsPageRoutingModule
  ],
  declarations: [TenantsPage]
})
export class TenantsPageModule {}
