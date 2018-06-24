import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading, MenuController, Menu, } from 'ionic-angular';
import { AuthService } from './../../providers/auth-service/auth-service';
import { MudaPage } from '../muda/muda';
import { Storage } from '@ionic/storage';


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
              private authService: AuthService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              public menu: MenuController,
              public storage: Storage
              ) {}
              
  public login(){
    this.showLoading()
    this.authService.login(this.registerCredentials).subscribe(permissao => {
      console.log('deu1')
      this.navCtrl.setRoot(MudaPage);
    },
      error => {
        this.showError(error._body);
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
    this.menu.swipeEnable(false);
    if(localStorage.getItem('token')){
      this.navCtrl.setRoot(MudaPage);
    }
  }

}
