import { NgModule } from '@angular/core';
import { DesafioComponent } from './desafio/desafio';
import { ModalComponent } from './modal/modal';
@NgModule({
	declarations: [DesafioComponent,
    ModalComponent],
	imports: [],
	exports: [DesafioComponent,
    ModalComponent]
})
export class ComponentsModule {}
