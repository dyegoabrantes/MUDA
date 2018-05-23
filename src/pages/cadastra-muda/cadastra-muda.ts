import { MudaPage } from './../muda/muda';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-cadastra-muda',
  templateUrl: 'cadastra-muda.html',
})
export class CadastraMudaPage {
  nome: string
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastraMudaPage');
    this.storage.clear();
  }
  cadasNome(){
    this.storage.set('nome-muda', this.nome);
    this.navCtrl.setRoot(MudaPage);
  }

}