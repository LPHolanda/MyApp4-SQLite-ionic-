import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();

      dbProvider.createDatabase().then(() => {
        //para abrir a home page somente depois que criar o banco
        this.abrirHomePage(splashScreen);
      }).catch((e) => {
        console.log(e);
        this.abrirHomePage(splashScreen);
      });
    });
  }

  private abrirHomePage(splashScreen: SplashScreen){
    splashScreen.hide();
    this.rootPage = HomePage;
  }
}

