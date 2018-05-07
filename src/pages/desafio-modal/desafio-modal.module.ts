import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesafioModalPage } from './desafio-modal';

@NgModule({
  declarations: [
    DesafioModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DesafioModalPage),
  ],
})
export class DesafioModalPageModule {}
