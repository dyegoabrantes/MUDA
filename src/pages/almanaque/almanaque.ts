import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesafiosPage } from './../desafios/desafios'


@IonicPage()
@Component({
  selector: 'page-almanaque',
  templateUrl: 'almanaque.html',
})
export class AlmanaquePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private desafios: DesafiosPage) {
  }

  ionViewDidLoad() {
    let desafios = this.desafios.desafiosConcluidos;
  }

}
