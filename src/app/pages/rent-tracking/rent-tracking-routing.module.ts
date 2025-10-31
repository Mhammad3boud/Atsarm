import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentTrackingPage } from './rent-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: RentTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentTrackingPageRoutingModule {}
