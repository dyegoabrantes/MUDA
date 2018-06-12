import { Emblema } from './../../app/_models/emblema';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Menu } from 'ionic-angular';
import { Muda } from './muda.model';
import { AuthService } from './../../providers/auth-service/auth-service'


@IonicPage()
@Component({
  selector: 'page-muda',
  templateUrl: 'muda.html',
})
export class MudaPage {
  muda: Muda = new Muda ('',0,0,{},'',[]);
  emblemas: Emblema[] =  [
    new Emblema (1 ,{},1,0,1)
  ]
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public menu: MenuController,
              public auth: AuthService) {
  }
  mudaImg = 3;
  // aux1: boolean
  // aux2: boolean
  // aux3: boolean 
  // aux4: boolean
  // aux5: boolean
  ionViewDidLoad() {    
    this.menu.swipeEnable(true);

    this.auth.getMuda()
    .subscribe(response => {
      if (response) {
        console.log(response);
        this.muda.nome = response.nome;
        this.muda.indiceGeral = response.indiceGeral;
        this.muda.pontos = response.pontos;
        this.muda.arquivo = response.arquivo;
        this.muda.userId = response._id;
        this.muda.desafiosId = response.desafiosId;
        this.muda._id = response._id;

        if (this.muda.desafiosId.length > 0){
          if(this.muda.pontos < 25) {
            this.mudaImg = 1;
          }else{
            if(this.muda.pontos >= 25 && this.muda.pontos < 50){
              this.mudaImg = 2;
            }else{
              if(this.muda.pontos >= 50 && this.muda.pontos < 75){
                this.mudaImg = 3;
              }else{
                if(this.muda.pontos >= 75 && this.muda.pontos < 95){
                  this.mudaImg = 4;
                }else{
                  if(this.muda.pontos >= 75 && this.muda.pontos < 95){
                    this.mudaImg = 4;
                  };
                }
              }
            }
          }
        }else{
          this.mudaImg = 3;
        };
        // if(this.muda.pontos >= 50 && this.muda.pontos < 75){
        //   this.aux1 = false
        //   this.aux2 = false
        //   this.aux3 = true 
        //   this.aux4 = false
        //   this.aux5 = false
        // }
        // if(this.muda.pontos < 25){
        //   this.aux1 = true
        //   this.aux2 = false
        //   this.aux3 = false 
        //   this.aux4 = false
        //   this.aux5 = false
        // }
        // if(this.muda.pontos >= 25 && this.muda.pontos < 50){
        //   this.aux1 = false
        //   this.aux2 = false
        //   this.aux3 = true 
        //   this.aux4 = false
        //   this.aux5 = false
        // }
        // if(this.muda.pontos >= 75 && this.muda.pontos < 95){
        //   this.aux1 = false
        //   this.aux2 = false
        //   this.aux3 = false
        //   this.aux4 = true
        //   this.aux5 = false
        // }
        // if(this.muda.pontos >= 95){
        //   this.aux1 = false
        //   this.aux2 = false
        //   this.aux3 = false 
        //   this.aux4 = false
        //   this.aux5 = true
        // }
        console.log(this.muda);
      } else {
        console.log('erro');
      }
    },
      error => {
        console.log(error);
      });
  }
}
