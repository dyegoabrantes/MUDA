import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesafioService } from "./../desafios/desafios.service";
import { Desafio } from './../../app/_models/desafio'

@IonicPage()
@Component({
  selector: 'page-almanaque',
  templateUrl: 'almanaque.html',
})
export class AlmanaquePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public desafioService: DesafioService,
              private socialSharing: SocialSharing
              ) {  }
  
  desafios= this.desafioService.desafios;


  share(message, subject, file, url){
    this.socialSharing.share('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  
  ionViewDidLoad() {
    
  }

}
