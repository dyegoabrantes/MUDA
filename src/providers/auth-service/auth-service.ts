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
  
  constructor(private http:Http){}

  currentUser: Usuario;

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Nenhum campo pode ficar vazio");
    } else {
      let url = "/api/login";
      return this.http.post(url,credentials)
      .map((response: Response) => {
        this.currentUser = response.json();
        return ('deu bom');
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
    return this.http.put(url,user)
      .map((response: Response) => {
        console.log(response)
        return ('deu bom');
      }).catch((error: Response) => Observable.throw(error));
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
