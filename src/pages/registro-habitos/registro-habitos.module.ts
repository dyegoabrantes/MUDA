import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroHabitosPage } from './registro-habitos';

@NgModule({
  declarations: [
    RegistroHabitosPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroHabitosPage),
  ],
})
export class RegistroHabitosPageModule {}
