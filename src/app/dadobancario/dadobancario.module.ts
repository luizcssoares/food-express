import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadobancarioPageRoutingModule } from './dadobancario-routing.module';

import { DadobancarioPage } from './dadobancario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadobancarioPageRoutingModule
  ],
  declarations: [DadobancarioPage]
})
export class DadobancarioPageModule {}
