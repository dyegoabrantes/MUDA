import { Muda } from './../pages/muda/muda.model';
import { Injectable, NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import {forwardRef } from '@angular/core';
import {Observable} from 'rxjs/Observable';
@NgModule({providers: [forwardRef(() => MudaService)]})
export class FooModule {
}

@Injectable()
export class MudaService{
    constructor(private http:Http){}

    muda: Muda
    public cadastraMuda(muda:Muda){
        let url = "api/mudas";
          return this.http.post(url, muda)
          .map((response: Response) => {
            })
          .catch((error: Response) => Observable.throw(error))
      }
    

}