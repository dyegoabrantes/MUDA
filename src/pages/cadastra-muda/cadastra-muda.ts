import { Muda } from './../muda/muda.model';
import { MudaService } from './../../providers/muda.service';
import { MudaPage } from './../muda/muda';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-cadastra-muda',
  templateUrl: 'cadastra-muda.html',
})
export class CadastraMudaPage {
  nome: string
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public mudaService: MudaService ) {
  }
  muda: Muda
  ionViewDidLoad() {
    this.storage.clear();
  }
  cadasNome(){
    this.storage.set('nome-muda', this.nome);
    this.muda = new Muda(this.nome, 3, 50, 'muda ani 3',  null);
    this.mudaService.cadastraMuda(this.muda)
    this.navCtrl.setRoot(MudaPage);
  }

}