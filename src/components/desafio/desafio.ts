import { Component } from '@angular/core';
import { Desafio} from './../../app/_models/desafio'

@Component({
  selector: 'desafio',
  templateUrl: 'desafio.html'
})
export class DesafioComponent {

  text: string;

  constructor() {
    
  }

  desafios: Desafio[];
  
}
