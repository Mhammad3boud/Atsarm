import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantsPage } from './tenants.page';

const routes: Routes = [
  {
    path: '',
    component: TenantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TenantsPageRoutingModule {}
