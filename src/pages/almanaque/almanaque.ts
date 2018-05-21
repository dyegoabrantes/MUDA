import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesafioService } from "./../desafios/desafios.service"

@IonicPage()
@Component({
  selector: 'page-almanaque',
  templateUrl: 'almanaque.html',
})
export class AlmanaquePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public desafioService: DesafioService,
              ) {  }
  

  
  ionViewDidLoad() {
    console.log(this.desafioService.desafiosConcluidos)
  }

}
