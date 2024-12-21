import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginsenhaPage } from './loginsenha.page';

const routes: Routes = [
  {
    path: '',
    component: LoginsenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginsenhaPageRoutingModule {}
