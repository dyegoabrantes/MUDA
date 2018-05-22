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
      let url = "/api/usuarios";
      return this.http.get(url)
      .map((response: Response) => {
        let users = response.json();
        let user = users.find(x => x.email == credentials.email);
        console.log(user);
        if(user === undefined){
          return Observable.throw("Usuário não encontrado");
        }else{
          if (user.senha == credentials.password){
            let access = (credentials.password === "pass" && credentials.email === "email");
            this.currentUser = new Usuario(user.nome, user.email, '', user.habitos, user.desafiosId, user.emblemas, user.longitude, user.latitude );
            console.log(this.currentUser);
            // return Observable.create(observer => {
            //   observer.next(access);
            //   observer.complete();
            // });
          }else{
            return Observable.throw("Senha incorreta");
          }
        }
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
