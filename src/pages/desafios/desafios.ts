import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, NavParams, ViewController  } from 'ionic-angular';
import { Desafio } from '../../app/_models/desafio';
import { DesafioService } from './desafios.service';
import { DesafioModalPage } from './../desafio-modal/desafio-modal';

@IonicPage()
@Component({
  selector: 'page-desafios',
  templateUrl: 'desafios.html',
})
export class DesafiosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public desafioService: DesafioService,
              public modalCtrl: ModalController) {}

  openModal(desafio) {
    console.log(desafio)
    let myModal = this.modalCtrl.create(DesafioModalPage, desafio);
    myModal.present();
  }
  

  desafios = this.desafioService.desafios;


  ionViewDidLoad() {
    console.log(this.desafios[1])
  }

}
