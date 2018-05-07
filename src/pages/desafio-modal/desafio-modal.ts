import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DesafiosPage } from '../desafios/desafios';

@IonicPage()
@Component({
  selector: 'page-desafio-modal',
  templateUrl: 'desafio-modal.html',
})
export class DesafioModalPage {
  titulo: string = this.navParams.get('titulo');
  descricao: string = this.navParams.get('descricao');
  
  id: string = this.navParams.get('id');
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }


  closeModal() {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DesafioModalPage');
  }

}
