import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Muda } from './muda.model';


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
      console.log(this.muda.nome);
    });
  }
}
