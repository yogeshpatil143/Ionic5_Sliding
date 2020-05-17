import { OnInit, OnDestroy, NgZone } from '@angular/core';
import { AppInjecterService } from '../app-injector';
import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { GlobalService } from '../service/global/global.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NetworkService } from '../service/network/network.service';
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { File } from '@ionic-native/file/ngx';

import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
export abstract class BaseWithInjectorServiceComponent implements OnInit, OnDestroy {
    alertCtrl: AlertController;
    navCtrl: NavController;
    popOverCtrl: PopoverController;
    router: Router;
    storage: Storage;
    globalService: GlobalService;
    networkService: NetworkService;
    platform: Platform;
    googlePlus: GooglePlus;
    socialSharing: SocialSharing;
    keyBoard: Keyboard;
    ngZone: NgZone;
    firebaseX: FirebaseX;
    file: File;
    camera: Camera;
    cameraOption: CameraOptions;
    androidPermissions: AndroidPermissions;
    constructor() {
        this.alertCtrl = AppInjecterService.injector.get(AlertController);
        this.navCtrl = AppInjecterService.injector.get(NavController);
        this.popOverCtrl = AppInjecterService.injector.get(PopoverController);
        this.router = AppInjecterService.injector.get(Router);
        this.globalService = AppInjecterService.injector.get(GlobalService);
        this.storage = AppInjecterService.injector.get(Storage);
        this.networkService = AppInjecterService.injector.get(NetworkService);
        this.platform = AppInjecterService.injector.get(Platform);
        this.googlePlus = AppInjecterService.injector.get(GooglePlus);
        this.socialSharing = AppInjecterService.injector.get(SocialSharing);
        this.keyBoard = AppInjecterService.injector.get(Keyboard);
        this.ngZone = AppInjecterService.injector.get(NgZone);
        this.firebaseX = AppInjecterService.injector.get(FirebaseX);
        this.file = AppInjecterService.injector.get(File);
        this.camera = AppInjecterService.injector.get(Camera);
        this.androidPermissions = AppInjecterService.injector.get(AndroidPermissions);
    }
    ngOnInit(): void {
        console.log('base init');
    }
    ngOnDestroy(): void {
        console.log('base destroy');
    }
    async logout() {
        this.simpleAlert("Hey Really ? ", " Are you sure to logout ?")
            .then((res: any) => {
                if (res) {
                    this.storage.clear();
                    this.router.navigate(['/']);
                    this.globalService.showToastMessage("You are successfully logout")
                }
                else {
                    this.globalService.showToastMessage("Continue...")
                }
            })
            .catch((error: any) => {

            })

    }
    async simpleAlert(head, subhead?: string, msg?: string, btns?: any): Promise<any> {
        let resolveFunction: (confirm: boolean) => void;
        let promise = new Promise<boolean>(resolve => {
            resolveFunction = resolve;
        });
        const alert = await this.alertCtrl.create({
            header: head,
            subHeader: subhead,
            message: msg || "",
            buttons: [
                {
                    text: 'NO',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                        resolveFunction(false);
                    }
                }, {
                    text: 'OK',
                    handler: () => {
                        resolveFunction(true);
                    }
                }
            ]
        });
        alert.present();
        await alert.onDidDismiss();
    }
}