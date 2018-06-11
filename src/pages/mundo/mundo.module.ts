import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MundoPage } from './mundo';

@NgModule({
  declarations: [
    MundoPage,
  ],
  imports: [
    IonicPageModule.forChild(MundoPage),
  ],
})
export class MundoPageModule {}
