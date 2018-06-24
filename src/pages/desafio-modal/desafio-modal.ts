import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DesafioService } from './../desafios/desafios.service';
import { AuthService } from './../../providers/auth-service/auth-service'
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-desafio-modal',
  templateUrl: 'desafio-modal.html',
})
export class DesafioModalPage {

  id: number = this.navParams.get('id');
  titulo: string = this.navParams.get('titulo');
  descricao: string = this.navParams.get('descricao');
	categoria: String = this.navParams.get('categoria');
	pontuacao: Number = this.navParams.get('pontuacao');
	duracao: Number = this.navParams.get('duracao');
	status: String = this.navParams.get('status');
  arquivoA?: string = this.navParams.get('arquivoA');
  arquivoB?: String = this.navParams.get('arquivoB');
	longitude?: String = this.navParams.get('longitude');
  latitude?: String = this.navParams.get('latitude');
  
  constructor(public http: Http,
              public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public desafioService: DesafioService,
              public authService: AuthService,
              // private geolocation: Geolocation,
            ) {}

  location = false;
  
  // getLocation(){
  //   this.geolocation.getCurrentPosition().then((resp) => {
  //     console.log(resp.coords.latitude)
  //     console.log(resp.coords.longitude)
  //    }).catch((error) => {
  //      console.log('Erro ao tentar encontrar a localização', error);
  //    });
  // }

  concluirDesafio(){
    
  }

  cancelaDesafio(){
    let id = this.id;
    let desafio = this.desafioService.desafios.find(function (obj) { return obj.id === id }); 
    desafio.status = 'notyet';
    let user = this.authService.currentUser;
    for (let i = 0; i < user.desafiosId.length; i++) {
      if (user.desafiosId[i].desafioId==id){
        user.desafiosId.splice(i, 1);
      }
    }

    this.authService.updateDesafio(user).subscribe(response => {
      console.log(response);
      this.closeModal();
    },
      error => {
        console.log(error);
      });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  desfioStatus = '';

  aceitarDesafio(){
    let id = this.id;
    let desafio = this.desafioService.desafios.find(function (desafio) { return desafio.id === id });
    desafio.status="pending";
    let user = this.authService.currentUser;
    if(user.desafiosId){
      user.desafiosId.push({desafioId:desafio.id,status:desafio.status});
    }else{
      user["desafiosId"] = [{desafioId:desafio.id,status:desafio.status}];
    };
    this.authService.updateDesafio(user).subscribe(response => {
      console.log(response);
      this.closeModal();
    },
      error => {
        console.log(error);
      });
  };

  ionViewDidLoad() {
    // this.getLocation();
    if (this.status == 'notyet'){
      this.desfioStatus ='Disponível';
    }else{
      if (this.status == 'pending') {
        this.desfioStatus ='Pendente';
      }else{
        this.desfioStatus ='Concluído';
      }
    }
  }
}
