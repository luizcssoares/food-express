import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadopessoalPageRoutingModule } from './dadopessoal-routing.module';

import { DadopessoalPage } from './dadopessoal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadopessoalPageRoutingModule
  ],
  declarations: [DadopessoalPage]
})
export class DadopessoalPageModule {}
