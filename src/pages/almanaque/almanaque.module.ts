import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlmanaquePage } from './almanaque';
import { DesafiosPage } from './../desafios/desafios';


@NgModule({
  declarations: [
    AlmanaquePage,
    DesafiosPage,
  ],
  imports: [
    IonicPageModule.forChild(AlmanaquePage),
  ],
})
export class AlmanaquePageModule {}
