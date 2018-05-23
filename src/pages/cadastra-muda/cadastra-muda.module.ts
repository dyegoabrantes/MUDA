import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastraMudaPage } from './cadastra-muda';

@NgModule({
  declarations: [
    CadastraMudaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastraMudaPage),
  ],
})
export class CadastraMudaPageModule {}
