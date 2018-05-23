import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading, } from 'ionic-angular';
import { AuthService } from './../../providers/auth-service/auth-service';
import { MudaPage } from '../muda/muda';


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
              ) {}
              
  public login(){
    this.showLoading()
    this.authService.login(this.registerCredentials).subscribe(permissao => {
      if (permissao) {
        console.log(permissao)
        this.showError(permissao.error);
      } else {
        this.navCtrl.setRoot(MudaPage);
      }
    },
      error => {
        this.showError(error);
      });
    // this.authService.login(this.registerCredentials).subscribe(permition => {
    //   if (permition) {
    //     console.log(permition)
    //     this.showError(permition.error);
    //   } else {
    //     this.navCtrl.setRoot(MudaPage);
    //   }
    // },
    //   error => {
    //     this.showError(error);
    //   });
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
