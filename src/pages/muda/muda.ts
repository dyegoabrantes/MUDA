import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Muda } from './muda.model';

/**
 * Generated class for the MudaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-muda',
  templateUrl: 'muda.html',
})
export class MudaPage {
  muda: Muda = new Muda (0,'',0,{},[])
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('nome-muda').then((val) => {
      this.muda.nome = val
    });
  }

  desafioConcluidos(){
    
  }

}
