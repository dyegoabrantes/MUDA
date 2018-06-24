import { AuthService } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MundoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mundo',
  templateUrl: 'mundo.html',
})
export class MundoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  }
  pontos: number =50
  prox: boolean = false
  prox2: boolean = true
  none1:boolean 
  none2:boolean 
  none3: boolean 
  // none2: boolean
  // none3: boolean 
  ionViewDidLoad() {
    console.log('ionViewDidLoad MundoPage');
    this.auth.getMudas()
    .subscribe(response => {
      this.pontos = response.media;
    })
    if (this.pontos <= 30){
      this.prox = true
      this.prox2 = false
      this.none2 = false
      this.none1 = true
      this.none3 = true
    }
    if (this.pontos > 30 && this.pontos <= 70){
      this.prox = false
      this.prox2 = false
      this.none2 = true
      this.none1 = false
      this.none3 = true
    }
    if(this.pontos > 70){
      this.prox = false
      this.prox2 = true
      this.none2 = true
      this.none1 = true
      this.none3 = false
    }
  }

}
