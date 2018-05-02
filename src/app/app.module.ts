import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DesafiosPage } from '../pages/desafios/desafios';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { LoginPage } from '../pages/login/login';
import { RegistroHabitosPage } from '../pages/registro-habitos/registro-habitos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { UserService } from './services/app.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DesafiosPage,
    CadastroPage,
    LoginPage,
    RegistroHabitosPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DesafiosPage,
    CadastroPage,
    LoginPage,
    RegistroHabitosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    UserService,
  ]
})
export class AppModule {}
