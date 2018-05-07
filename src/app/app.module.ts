import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DesafiosPage } from '../pages/desafios/desafios';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { RegistroHabitosPage } from '../pages/registro-habitos/registro-habitos';
import { AppService } from './app.service';
import { DesafioComponent } from './../components/desafio/desafio';
import { DesafioModalPage } from './../pages/desafio-modal/desafio-modal';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { UserService } from './services/app.service';
import { DesafioService } from './../pages/desafios/desafios.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    DesafioComponent,
    MyApp,
    HomePage,
    ListPage,
    DesafiosPage,
    DesafioModalPage,
    CadastroPage,
    LoginPage,
    RegistroHabitosPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DesafiosPage,
    DesafioModalPage,
    CadastroPage,
    LoginPage,
    RegistroHabitosPage,
  ],
  providers: [
    AppService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    UserService,
    DesafioService,
  ]
})
export class AppModule {}
