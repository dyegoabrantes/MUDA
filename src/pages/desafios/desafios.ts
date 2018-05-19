import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, Platform, NavParams, ViewController  } from 'ionic-angular';
import { Desafio } from '../../app/_models/desafio';
import { DesafioService } from './desafios.service';
import { DesafioModalPage } from './../desafio-modal/desafio-modal';
import { AuthService } from './../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-desafios',
  templateUrl: 'desafios.html',
})
export class DesafiosPage {
    
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public desafioService: DesafioService,
    private auth: AuthService,
    public modalCtrl: ModalController) {}
    
    public desafiosDisponiveis: Desafio[] =[];
    public desafiosPendentes: Desafio[] =[];
    public desafiosConcluidos: Desafio[] =[];
    
    openModal(desafio) {
      console.log(desafio)
      let myModal = this.modalCtrl.create(DesafioModalPage, desafio);
      myModal.present();
    }
    

    carrega() {
      // console.log(this.auth.currentUser.desafiosId.length)
    for (let i = 0; i < this.desafioService.desafios.length; i++) {
      console.log(this.desafioService.desafios[i].titulo)
      let titulo = this.desafioService.desafios[i].titulo;
      this.desafiosDisponiveis.push(this.desafioService.desafios[i]);
      // if(this.auth.currentUser.desafiosId.length>0){
      //   for (let courrentUserId = 0; courrentUserId < this.auth.currentUser.desafiosId.length; courrentUserId++) {
      //     if (this.desafioService.desafios[i].id == this.auth.currentUser.desafiosId[courrentUserId]){
      //       if (this.desafioService.desafios[i].status == "pending"){
      //         this.desafiosPendentes.push(this.desafioService.desafios[i]);
      //       }else{
      //         if(this.desafioService.desafios[i].status=="done"){
      //           this.desafiosConcluidos.push(this.desafioService.desafios[i]);
      //         }else{
      //           this.desafiosDisponiveis.push(this.desafioService.desafios[i]);
      //         }
      //       }
      //     }
      //   }
      // }
    }
    }

  ionViewDidLoad() {
    this.carrega();
  }
}
