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
      console.log('inicia login');      
      let url = "/api/login";
      return this.http.post(url,credentials)
      .map((response: Response) => {
        console.log(response);
      })
      .catch((error: Response) => Observable.throw(error))

    }
  }

  public cadastraUsuario(usuario:Usuario){
    let url = "api/usuarios";
    console.log(usuario)
      return this.http.post(url, usuario)
      .map((response: Response) => {
        
        console.log(response.json())
        })
      .catch((error: Response) => Observable.throw(error))
  }

  public getUserInfo() : Usuario {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
