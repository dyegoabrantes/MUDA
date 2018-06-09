import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
// import { Storage } from '@ionic/storage';
import { Usuario } from './../../pages/cadastro/usuario.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';


@Injectable()
export class AuthService {
  
  constructor(private http:Http,
              ){}

  currentUser: Usuario;
  token = "";

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Nenhum campo pode ficar vazio");
    } else {
      let url = "/api/login";
      return this.http.post(url,credentials)
      .map((response: Response) => {
        this.token = response.json().token;
        this.currentUser= response.json().data;
        return (this.currentUser);
      }).catch((error: Response) => Observable.throw(error));
    }
  }

  public cadastraUsuario(usuario:Usuario){
    let url = "api/usuarios";
      return this.http.post(url, usuario)
      .map((response: Response) => {
        })
      .catch((error: Response) => Observable.throw(error))
  }

  public getUserInfo() : Usuario {
    return this.currentUser;
  }

  public updateDesafio(user){
    let url = '/api/usuarios/'+this.currentUser._id;
    return this.http.put(url,{user:user,token:this.token})
      .map((response: Response) => {
        console.log(response)
        return ('deu bom');
      }).catch((error: Response) => Observable.throw(error));
  }

  public logout() {
    this.currentUser = null;
    this.token= "";
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }
}
