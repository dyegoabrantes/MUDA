import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading, } from 'ionic-angular';
import { AuthService } from './../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loading: Loading;
  
  registerCredentials = { email: '', password: '' };


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: AuthService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              ) {}
              
  public login(){
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(permissao => {
      if (permissao) {
        console.log(permissao)
        this.showError(permissao.error);
      } else {
        this.navCtrl.setRoot(HomePage);
      }
    },
      error => {
        this.showError(error);
      });
  }
  validado: boolean = false;
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Por favor aguarde',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  public showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: ':(',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  createAccount(){
    this.navCtrl.setRoot(CadastroPage);
  }

  ionViewDidLoad() {
  }

}
