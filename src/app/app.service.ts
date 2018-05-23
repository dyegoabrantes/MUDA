import { Usuario } from './../pages/cadastro/usuario.model';
import { Injectable, NgModule } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {forwardRef } from '@angular/core';

@NgModule({providers: [forwardRef(() => AppService)]})
export class FooModule {
}

@Injectable()
export class AppService{
    constructor(private http: Http ){}

  
}