import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html',
  
})
export class ModalComponent {

  text: string;

  constructor(public modalCtrl: ModalController) {
    console.log('Hello ModalComponent Component');
    this.text = 'Hello World';
  }

}
