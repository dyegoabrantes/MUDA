import { EmblemaService } from './emblema.service';
import { DesafioService } from './../desafios/desafios.service';
import { Usuario } from './../cadastro/usuario.model';
import { Emblema } from './../../app/_models/emblema';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Menu } from 'ionic-angular';
import { Muda } from './muda.model';
import { AuthService } from './../../providers/auth-service/auth-service'
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-muda',
  templateUrl: 'muda.html',
})

export class MudaPage {
  muda: Muda = new Muda ('',0,0,{},'',[]);
  idDesafios = []
  emblemas: Emblema[] =  [
    new Emblema (1 ,'',1,0,'')
  ]
  listaDesafios
  desafios
  contEmblema: number = 0
  desafiosTempo = []
  emtem: number = 0

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public storage: Storage,
              public menu: MenuController,
              public auth: AuthService,
              public desafioService: DesafioService,
              public emblemaService: EmblemaService
            ) {
  }
  aux1: boolean
  aux2: boolean
  aux3: boolean 
  aux4: boolean
  aux5: boolean
 
  ionViewDidLoad() {    
    this.menu.swipeEnable(true);
    this.listaDesafios = this.auth.getUserInfo().desafiosId
    if(this.listaDesafios){
      for(let i=0; i< this.listaDesafios.length; i++){
        this.idDesafios.push(this.listaDesafios[i].desafioId);
    }
    }
    
    this.desafios = this.desafioService.desafios;
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
    
        if(this.muda.pontos >= 50 && this.muda.pontos < 75){
          this.aux1 = false
          this.aux2 = false
          this.aux3 = true 
          this.aux4 = false
          this.aux5 = false
          this.muda.indiceGeral = 3;
        }
        if(this.muda.pontos < 25){
          this.aux1 = true
          this.aux2 = false
          this.aux3 = false 
          this.aux4 = false
          this.aux5 = false
          this.muda.indiceGeral = 1;
        }
        if(this.muda.pontos >= 25 && this.muda.pontos < 50){
          this.aux1 = false
          this.aux2 = false
          this.aux3 = true 
          this.aux4 = false
          this.aux5 = false
          this.muda.indiceGeral = 2;
        }
        if(this.muda.pontos >= 75 && this.muda.pontos < 95){
          this.aux1 = false
          this.aux2 = false
          this.aux3 = false
          this.aux4 = true
          this.aux5 = false
          this.muda.indiceGeral = 4;
        }
        if(this.muda.pontos >= 95){
          this.aux1 = false
          this.aux2 = false
          this.aux3 = false 
          this.aux4 = false
          this.aux5 = true
          this.muda.indiceGeral = 5;
        }
        this.calcularPontos();
        
      } else {
        console.log('erro');
      }
    },
      error => {
        console.log(error);
      });
      this.emblemasCarregar();
      
  }

  emblemasCarregar(){
    let desEm = [] 
    let em  = this.emblemaService.emblemas 
    let aux 
    let cont: number = 0 
    let ems = [] 
    
    for(let i=0; i<this.desafios.length; i++){
      for (let a =0; a<this.idDesafios.length; a++){
        if(this.desafios[i].id == this.idDesafios[a] ) {
            desEm.push(this.desafios[i].categoria);
        }     
      }
    }
    for(let b=0; b<desEm.length ; b++){
      aux = desEm[b]
      for(let l =0;l<desEm.length;l++){
        if(aux == desEm[l]){
          cont++
          if(cont>2){
            ems.push(aux);
          }
        }
      }
    }
      var uniqueArray = Array.from(new Set(ems));
      if(uniqueArray.length>0){
        for(let s=0; s < uniqueArray.length; s++){
          this.emblemas.push( new Emblema (
            2,
            "EmblemasMuda",
            1,
            1,
            uniqueArray[s]
          ))
        }

      }
      if(this.emblemas[0].id==1){
        this.emblemas.splice(0,1);
      }
    this.emtem = this.emblemas.length;
    }
  
  calcularPontos(){
    let soma =0 
    console.log(this.muda._id);
    for(let i=0; i<this.desafios.length; i++){
      for(let a=0;a<this.listaDesafios.length;a++){
        if(this.listaDesafios[a].desafioId == this.desafios[i].id){
          if(this.listaDesafios[a].status=="pending"){
            soma =  soma + this.desafios[i].pontuacao;
            console.log(soma);
             return this.auth.updateMuda(this.muda, this.muda.pontos + soma) 
              .subscribe(response =>{
              console.log(response);
              });
          }
      }
    }
  }
  }
  logout(){
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
