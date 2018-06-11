import { Muda } from './../muda/muda.model';
import { MudaPage } from './../muda/muda';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from './../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-cadastra-muda',
  templateUrl: 'cadastra-muda.html',
})
export class CadastraMudaPage {
  nome: string
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public auth: AuthService ) {
  }
  muda: Muda
  ionViewDidLoad() {
    this.storage.clear();
  }
  cadasNome(){
    let id = this.auth.currentUser._id;
    this.storage.set('nome-muda', this.nome);
    this.muda = new Muda(this.nome, 3, 50, 'muda ani 3', id );
    this.auth.salvaMuda(this.muda).subscribe(permissao => {
      this.navCtrl.setRoot(MudaPage);
    },
      error => {
        console.log(error._body);
      });
  }

}