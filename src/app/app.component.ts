import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BaseWithInjectorServiceComponent } from './base/base-service-injector';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent extends BaseWithInjectorServiceComponent implements OnInit {
  constructor(
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    super()
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is("android")) {
        this.askAndroidPermission();
        this.getFirebaseToken();
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  getFirebaseToken() {
    this.firebaseX.getToken()
      .then(token => {
        console.log(`The token is ${token}`)
      })
      .catch(error => {
        console.error('Error getting token', error)
      });
  }
  askAndroidPermission() {
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE]).
      then((result) => {
        this.globalService.logDetail('Has permission?', result.hasPermission)
        if (!result.hasPermission) {
          this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE])
        }
      },
        (error) => {
          this.globalService.logDetail("Error While Access Permission = " + error)
          this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE, this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE])
        })
      .catch((error) => {
        this.globalService.logDetail("CATCH Error While Access Permission = " + error)
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]);
      })
  }
}
