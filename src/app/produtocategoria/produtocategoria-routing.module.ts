import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutocategoriaPage } from './produtocategoria.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutocategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutocategoriaPageRoutingModule {}
