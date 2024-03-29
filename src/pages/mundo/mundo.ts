import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mundo',
  templateUrl: 'mundo.html',
})
export class MundoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  pontos: number =10
  prox: boolean = false
  prox2: boolean = true
  none1:boolean 
  none2:boolean 
  none3: boolean 
  // none2: boolean
  // none3: boolean 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MundoPage');
    if (this.pontos <= 30){
      this.prox = true
      this.prox2 = false
      this.none2 = false
      this.none1 = true
      this.none3 = true
    }
    if (this.pontos > 30 && this.pontos <= 70){
      this.prox = false
      this.prox2 = false
      this.none2 = true
      this.none1 = false
      this.none3 = true
    }
    if(this.pontos > 70){
      this.prox = false
      this.prox2 = true
      this.none2 = true
      this.none1 = true
      this.none3 = false
    }
  }

}
