import { Usuario } from './../pages/cadastro/usuario.model';

import { Injectable, NgModule } from '@angular/core';
import { Http, Response , HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {forwardRef } from '@angular/core';

@NgModule({providers: [forwardRef(() => AppService)]})
export class FooModule {
}

@Injectable()
export class AppService{

    url:string = "http://rest.learncode.academy/api/learncode/mudapp";
      
    constructor(private http: Http ){}

    usuario: Usuario[]

    cadastrarUsuario(usuario: Usuario){
        return this.http.post(this.url, usuario)
        .map((response: Response) =>  response.json())
        .catch((error: Response) => Observable.throw(error));
    }  
}
