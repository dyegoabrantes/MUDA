import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams  } from 'ionic-angular';
import { Desafio } from '../../app/_models/desafio';
import { DesafioService } from './desafios.service';
import { AuthService } from './../../providers/auth-service/auth-service';
import { DesafioModalPage } from './../desafio-modal/desafio-modal';

@IonicPage()
@Component({
  selector: 'page-desafios',
  templateUrl: 'desafios.html',
})
export class DesafiosPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public desafioService: DesafioService,
              public modalCtrl: ModalController,
              public authService: AuthService) {}

  openModal(desafio) {
    let myModal = this.modalCtrl.create(DesafioModalPage, desafio);
    myModal.present();
  }
    
  desafios = [];


  carrega() {
    this.desafios=this.desafioService.desafios;
    console.log(this.desafios);
    if(this.authService.currentUser.desafiosId){
      if(this.authService.currentUser.desafiosId.length>0){
        for(let i =0;i<this.desafios.length;i++){
          for(let e =0;e<this.authService.currentUser.desafiosId.length;e++){
            console.log(this.authService.currentUser.desafiosId[e].desafioId,this.desafios[i].desafioId)
            if (this.authService.currentUser.desafiosId[e].desafioId==this.desafios[i].id){
              this.desafios[i].status=this.authService.currentUser.desafiosId[e].status;
            }
          }
        }
      }
    }
  }

  ionViewDidLoad() {
    this.carrega();
  };

}