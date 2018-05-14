import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Habito } from './habito.model';
import { Usuario } from './../cadastro/usuario.model';
import { AppService } from './../../app/app.service';
/**
 * Generated class for the RegistroHabitosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-habitos',
  templateUrl: 'registro-habitos.html',
})
export class RegistroHabitosPage {

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public appService: AppService,
      public storage: Storage
    ) {
  }
  usuario: Usuario = new Usuario ('','','',[],[],[],0,0)
  habitos: Habito[] =  [
    new Habito (1,"Fechar a torneira" , "Fechar a torneira ao escovar os dentes", false,"Agua", 1),
    new Habito (2,"Apagar as luzes" , "Apagar as luzes dos cômodos quando não estiverem presentes", false , "Energia", 1),
    new Habito (3,"Desligar da tomada" , "Desligar da tomada os aparelhos que não estão em uso", false , "Energia",1),
    new Habito (4,"Entrega pilhas" , "Entrega pilhas usadas em um estabelecimento adequado", false, "Residuos" , 1),
    new Habito (5,"Trocar uma lâmpada" , "Trocar uma lâmpada de sua casa por uma lâmpada LED", false, "Residuos" , 1),
    new Habito (6,"Banho" , "Menos tempo no banho", false, "Agua", 1),
    new Habito (7,"Lixo" , "Separar o lixo corretamente", false, "Residuos", 1),
    new Habito (8,"Reduzir lixo" , "Reduzir a quantidade de lixo produzido semanalmente", false, "Residuos" , 1),
    new Habito (9,"Descarte oleo" , "Descarte adequado do óleo de cozinha", false, "Residuos" ,1),
    new Habito (10,"Evitar transportes" , "Evitar transportes individuais e poluentes", false ,"Emissão" ,1)
  ]
  

  ionViewDidLoad() {
    this.storage.get('nome').then((val) => {
      this.usuario.nome = val
    });
    this.storage.get('email').then((val) => {
        this.usuario.email = val 
    });
    this.storage.get('senha').then((val) => {
      this.usuario.senha = val
    });

  }

  statusHabito(habito){
    console.log(habito.status)
    
  }

  inserirUsuario(){
    this.navCtrl.setRoot(HomePage);
    this.appService.cadastrarUsuario(this.usuario)
    .subscribe((data) => {
    },
      (error) => console.log(error));
  }

  cadastrar(){
    for(let i of this.habitos){
      if(i.status){
        this.usuario.habito.push(i.id)
      }{
    }
  }
}}
