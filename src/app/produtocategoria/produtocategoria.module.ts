import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutocategoriaPageRoutingModule } from './produtocategoria-routing.module';

import { ProdutocategoriaPage } from './produtocategoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutocategoriaPageRoutingModule
  ],
  declarations: [ProdutocategoriaPage]
})
export class ProdutocategoriaPageModule {}
