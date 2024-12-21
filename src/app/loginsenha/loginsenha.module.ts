import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginsenhaPageRoutingModule } from './loginsenha-routing.module';

import { LoginsenhaPage } from './loginsenha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginsenhaPageRoutingModule
  ],
  declarations: [LoginsenhaPage]
})
export class LoginsenhaPageModule {}
