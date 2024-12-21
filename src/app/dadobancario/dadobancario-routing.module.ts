import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadobancarioPage } from './dadobancario.page';

const routes: Routes = [
  {
    path: '',
    component: DadobancarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadobancarioPageRoutingModule {}
