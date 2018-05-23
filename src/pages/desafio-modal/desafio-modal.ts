import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DesafiosPage } from '../desafios/desafios';
import { DesafioService } from './../desafios/desafios.service'

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
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public desafioService: DesafioService,
            ) {}

  
  cancelaDesafio(){
    let id = this.id;
    let obj = this.desafioService.desafios.find(function (obj) { return obj.id === id }); 
    obj.status = 'notyet';
    this.closeModal();
    console.dir(obj)
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  desfioStatus = '';

  aceitarDesafio(){
    let id = this.id;
    let obj = this.desafioService.desafios.find(function (obj) { return obj.id === id });
    obj.status="pending";
  };

  ionViewDidLoad() {
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
