import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { DesafiosPageModule } from '../pages/desafios/desafios.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegistroHabitosPageModule } from '../pages/registro-habitos/registro-habitos.module';
import { AppService } from './app.service';
import { DesafioModalPageModule } from './../pages/desafio-modal/desafio-modal.module';
import { AlmanaquePageModule } from './../pages/almanaque/almanaque.module'
import { MudaPageModule } from './../pages/muda/muda.module';
import { CadastraMudaPageModule } from '../pages/cadastra-muda/cadastra-muda.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { DesafioService } from './../pages/desafios/desafios.service';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Geolocation } from '@ionic-native/geolocation';
import { MundoPage } from './../pages/mundo/mundo';
import { MundoPageModule } from './../pages/mundo/mundo.module';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    DesafiosPageModule,
    DesafioModalPageModule,
    CadastroPageModule,
    LoginPageModule,
    RegistroHabitosPageModule,
    AlmanaquePageModule,
    MudaPageModule,
    MundoPageModule,
    CadastraMudaPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    AppService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DesafioService,
    SocialSharing,
    Geolocation,
  ]
})
export class AppModule {}
