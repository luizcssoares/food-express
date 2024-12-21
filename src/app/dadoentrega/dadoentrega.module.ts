import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadoentregaPageRoutingModule } from './dadoentrega-routing.module';

import { DadoentregaPage } from './dadoentrega.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadoentregaPageRoutingModule
  ],
  declarations: [DadoentregaPage]
})
export class DadoentregaPageModule {}
