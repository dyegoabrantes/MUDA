import { Injectable, NgModule } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {forwardRef } from '@angular/core';

@NgModule({providers: [forwardRef(() => AppService)]})
export class FooModule {
}

@Injectable()
export class AppService{
    constructor(){}

  
}