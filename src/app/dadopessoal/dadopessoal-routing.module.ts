import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadopessoalPage } from './dadopessoal.page';

const routes: Routes = [
  {
    path: '',
    component: DadopessoalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadopessoalPageRoutingModule {}
