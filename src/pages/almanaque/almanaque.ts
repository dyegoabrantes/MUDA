import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DesafioService } from "./../desafios/desafios.service";
import { Desafio } from './../../app/_models/desafio';
import { AuthService } from './../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-almanaque',
  templateUrl: 'almanaque.html',
})
export class AlmanaquePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public desafioService: DesafioService,
              private socialSharing: SocialSharing,
              private auth: AuthService
              ) {  }
  
  desafios=this.desafioService.desafios;

  desafiosConcluidos = [];


  share(message, subject, file, url){
    this.socialSharing.share('Body', 'Subject', ['recipient@example.org']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  
  ionViewDidLoad() {
    if(this.auth.currentUser.desafiosId){
      if(this.auth.currentUser.desafiosId.length>0){
        for(let i =0;i<this.desafios.length;i++){
          for(let e =0;e<this.auth.currentUser.desafiosId.length;e++){
            if (this.auth.currentUser.desafiosId[e].desafioId==this.desafios[i].id && this.auth.currentUser.desafiosId[e].status=="done"){
              this.desafiosConcluidos.push(this.desafios[i]);
            }
          }
        }
      }
    }
    
  }

}
