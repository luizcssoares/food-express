import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadoentregaPage } from './dadoentrega.page';

const routes: Routes = [
  {
    path: '',
    component: DadoentregaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadoentregaPageRoutingModule {}
