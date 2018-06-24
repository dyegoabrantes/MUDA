import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, } from 'ionic-angular';
import { DesafioService } from './../desafios/desafios.service';
import { AuthService } from './../../providers/auth-service/auth-service'
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

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
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public http: Http,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public desafioService: DesafioService,
    public authService: AuthService,
    private geolocation: Geolocation,
  ) {}
  
  location = false;

  tempoDesafio = 0;
  
  ionViewDidLoad() {
    if(this.latitude){
      this.location = true;
      this.getLocation();
    }
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
  
  
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      let lat = resp.coords.latitude;
      let lon = resp.coords.longitude;
      this.initMap(lat,lon);
    }).catch((error) => {
      console.log('Erro ao tentar encontrar a localização', error);
    });
  }
  
    initMap(a,b) {
      var myLatLng = {lat: a, lng: b};
      var pontoColeta1 = new google.maps.LatLng(-4.979256, -39.056513);
      var pontoSaida = new google.maps.LatLng(a, b);

      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 18,
        center: myLatLng
      });
      this.directionsDisplay.setMap(this.map);

      var marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: "Aqui está você!"
      });
      
      this.calculateAndDisplayRoute(myLatLng, pontoColeta1)
    }
  
  calculateAndDisplayRoute(a,b) {
    this.directionsService.route({
      origin: a,
      destination: b,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  concluirDesafio(){
    let id = this.id;
    let desafio = this.desafioService.desafios.find(function (obj) { return obj.id === id }); 
    desafio.status = 'done';
    let user = this.authService.currentUser;
    for (let i = 0; i < user.desafiosId.length; i++) {
      if (user.desafiosId[i].desafioId==id){
        user.desafiosId[i].status='done';
      }
    }

    this.authService.updateDesafio(user).subscribe(response => {
      this.closeModal();
    },
      error => {
        console.log(error);
      });
  }

  cancelaDesafio(){
    let id = this.id;
    let desafio = this.desafioService.desafios.find(function (obj) { return obj.id === id }); 
    desafio.status = 'notyet';
    let user = this.authService.currentUser;
    for (let i = 0; i < user.desafiosId.length; i++) {
      if (user.desafiosId[i].desafioId==id){
        user.desafiosId.splice(i, 1);
      }
    }

    this.authService.updateDesafio(user).subscribe(response => {
      this.closeModal();
    },
      error => {
        console.log(error);
      });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  desfioStatus = '';

  aceitarDesafio(){
    let id = this.id;
    let desafio = this.desafioService.desafios.find(function (desafio) { return desafio.id === id });
    desafio.status="pending";
    let user = this.authService.currentUser;
    if(user.desafiosId){
      user.desafiosId.push({desafioId:desafio.id,status:desafio.status});
    }else{
      user["desafiosId"] = [{desafioId:desafio.id,status:desafio.status}];
    };
    this.authService.updateDesafio(user).subscribe(response => {
      // let cancela = this.cancelaDesafio();
      // setTimeout('cancela()',10000);
      this.closeModal();
    },
      error => {
        console.log(error);
      });
  };
  
  contagem_tempo(){	             
    let segundos = 0;
      
    segundos = segundos - 1;

    if (segundos == -1) {
     segundos = 0;
    }   
                
    }    
}
