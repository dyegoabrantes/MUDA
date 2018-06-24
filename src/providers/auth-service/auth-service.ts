import { Injectable } from '@angular/core';
import { Usuario } from './../../pages/cadastro/usuario.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
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
        localStorage.setItem('token', this.token);
        // localStorage.setItem('currentUser', this.currentUser.toString());
        return (this.currentUser);
      }).catch((error: Response) => Observable.throw(error));
    }
  }

  public cadastraUsuario(usuario:Usuario){
    let url = "api/novoUsuario";
    return this.http.post(url, usuario)
    .map((response: Response) => {
      this.currentUser=response.json()
      console.log(this.currentUser)
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
    localStorage.clear();
    return Observable.create(observer => {
      observer.next(true);
      observer.complete();
    });
  }

  public salvaMuda(muda){
    let url = '/api/mudas/';
    return this.http.post(url,muda)
      .map((response: Response) => {
        return (response);
      }).catch((error: Response) => Observable.throw(error));
  }

  public getMuda() {
    let url = '/api/mudas/'+this.currentUser._id;
    return this.http.get(url)
    .map((response: Response) => {
      return (response.json());
    }).catch((error: Response) => Observable.throw(error));
  }
}
