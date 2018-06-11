
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { RegistroHabitosPage } from '../pages/registro-habitos/registro-habitos';
import { DesafiosPage } from '../pages/desafios/desafios';
import { AlmanaquePage } from '../pages/almanaque/almanaque';
import { MudaPage } from './../pages/muda/muda';
import{ CadastraMudaPage } from './../pages/cadastra-muda/cadastra-muda';
import { MundoPage } from './../pages/mundo/mundo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RegistroHabitosPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Muda', component: MudaPage },
      { title: 'Cadastro', component: CadastroPage },
      { title: 'Login', component: LoginPage },
      { title: 'Registro de hábitos', component: RegistroHabitosPage },
      { title: 'Desafios', component: DesafiosPage },
      { title: 'Almanaque', component: AlmanaquePage },
      { title: 'Mundo', component: MundoPage },
      { title: 'Cadastra muda', component: CadastraMudaPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
