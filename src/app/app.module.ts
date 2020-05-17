import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FIREBASE_CONFIG } from './firebase-credentials';
import { NetworkService } from '../app/service/network/network.service'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInjecterService } from './app-injector';
import { IonicStorageModule } from '@ionic/storage';
import { Network } from "@ionic-native/network/ngx";
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Camera } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import * as firebase from 'firebase';
firebase.initializeApp(FIREBASE_CONFIG);
//import  component 
import { PopoverComponent } from '../app/component/popover/popover.component'
@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
  imports: [BrowserModule, ReactiveFormsModule, AngularFireModule.initializeApp(FIREBASE_CONFIG), AngularFirestoreModule, AngularFireAuthModule, FormsModule, IonicModule.forRoot(), IonicStorageModule.forRoot({
    name: 'BOG_ACC_4',
    driverOrder: ['indexeddb', 'sqlite', 'websql']
  }), AppRoutingModule],
  providers: [
    StatusBar,
    FirebaseX,
    SplashScreen,
    Network,
    GooglePlus,
    NetworkService,
    SocialSharing,
    Keyboard,
    Camera,
    File,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjecterService.injector = injector;
  }
}
