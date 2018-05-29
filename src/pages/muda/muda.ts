import { Emblema } from './../../app/_models/emblema';
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
  muda: Muda = new Muda (50,0,'',0,{},[])
  emblemas: Emblema[] =  [
    new Emblema (1 ,{},1,0,1)
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  }
  aux1: boolean
  aux2: boolean
  aux3: boolean 
  aux4: boolean
  aux5: boolean
  ionViewDidLoad() {
    this.storage.get('nome-muda').then((val) => {
      this.muda.nome = val
    });
    if(this.muda.pontos >= 50 && this.muda.pontos < 75){
      this.aux1 = false
      this.aux2 = false
      this.aux3 = true 
      this.aux4 = false
      this.aux5 = false
      this.muda.indiceGeral = 3;
    }
    if(this.muda.pontos < 25){
      this.aux1 = true
      this.aux2 = false
      this.aux3 = false 
      this.aux4 = false
      this.aux5 = false
      this.muda.indiceGeral = 1;
    }
    if(this.muda.pontos >= 25 && this.muda.pontos < 50){
      this.aux1 = false
      this.aux2 = false
      this.aux3 = true 
      this.aux4 = false
      this.aux5 = false
      this.muda.indiceGeral = 2;
    }
    if(this.muda.pontos >= 75 && this.muda.pontos < 95){
      this.aux1 = false
      this.aux2 = false
      this.aux3 = false
      this.aux4 = true
      this.aux5 = false
      this.muda.indiceGeral = 4;
    }
    if(this.muda.pontos >= 95){
      this.aux1 = false
      this.aux2 = false
      this.aux3 = false 
      this.aux4 = false
      this.aux5 = true
      this.muda.indiceGeral = 5;
    }
  }
}
