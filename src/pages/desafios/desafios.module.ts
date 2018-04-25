import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DesafiosPage } from './desafios';

@NgModule({
  declarations: [
    DesafiosPage,
  ],
  imports: [
    IonicPageModule.forChild(DesafiosPage),
  ],
})
export class DesafiosPageModule {}
