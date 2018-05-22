import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlmanaquePage } from './almanaque';


@NgModule({
  declarations: [
    AlmanaquePage,
  ],
  imports: [
    IonicPageModule.forChild(AlmanaquePage),
  ],
})
export class AlmanaquePageModule {}
