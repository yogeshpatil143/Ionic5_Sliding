import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  loading: HTMLIonLoadingElement;
  firebaseDB: any;
  constructor(public alertCtrl: AlertController, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.firebaseDB = firebase.firestore()
  }
  async logDetail(message: string, additionalParams?: string) {
    console.log(message);
  }

  async showAlertMessage(titleText: any, messageText: any, buttonText: any): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    let promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    let alert = await this.alertCtrl.create({
      header: titleText,
      subHeader: messageText,
      backdropDismiss: false,
      buttons: [{
        text: buttonText,
        handler: () => {
          alert.dismiss()
          resolveFunction(true)
        }
      }]
    });
    await alert.present();
    return promise;
  }
  async showForceConfirmationMessage(message: string): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    let promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    let alert = await this.alertCtrl.create({
      header: 'BoG',
      subHeader: "",
      message: message,
      animated: true,
      keyboardClose: true,
      backdropDismiss: false,
      buttons: [{
        text: 'Yes',
        handler: () => {
          this.alertCtrl.dismiss()
          resolveFunction(true)
        }
      }]
    });
    alert.present();
    return promise;
  }
  async showConfirmationMessageWithTitle(titleData, messageData: string): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    let promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    let alert = await this.alertCtrl.create({
      header: titleData,
      message: messageData,
      backdropDismiss: false,
      buttons: [{
        text: 'No',
        handler: () => resolveFunction(false)
      }, {
        text: 'Yes',
        handler: () => resolveFunction(true)
      }]
    });
    alert.present();
    return promise;
  }
  async  showConfirmationMessage(message: string): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    let promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    let alert = await this.alertCtrl.create({
      header: 'BoG',
      message: message,
      backdropDismiss: false,
      buttons: [{
        text: 'No',
        handler: () => resolveFunction(false)
      }, {
        text: 'Yes',
        handler: () => resolveFunction(true)
      }]
    });
    alert.present();
    return promise;
  }
  async showAbortTripConfirmation(titleData, messageData: string, ok: string, cancel: string): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    let promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    let alert = await this.alertCtrl.create({
      header: titleData,
      message: messageData,
      backdropDismiss: false,
      buttons: [{
        text: ok,
        handler: () => resolveFunction(false)
      }, {
        text: cancel,
        handler: () => resolveFunction(true)
      }]
    });
    alert.present();
    return promise;
  }
  async showSimpleAlertMessage(messageText: any, buttonText: any) {
    let alert = await this.alertCtrl.create({
      header: "BoG",
      subHeader: messageText,
      buttons: [buttonText]
    });
    alert.present();
  }
  async showAlertConfirmMessage(titleText: any, messageText: any, buttonText: any): Promise<boolean> {
    let resolveFunction: (confirm: boolean) => void;
    let promise = new Promise<boolean>(resolve => {
      resolveFunction = resolve;
    });
    let alert = await this.alertCtrl.create({
      header: titleText,
      subHeader: messageText,
      buttons: [{
        text: buttonText,
        handler: () => {
          alert.dismiss()
          resolveFunction(true)
        }
      }]
    });
    await alert.present();
    return promise;
  }
  async hideToast() {
    console.log("Hide Toast message")
    this.toastCtrl.dismiss()
  }
  async showToastMessage(messageData) {

    let toast = await this.toastCtrl.create({
      message: messageData,
      cssClass: "normal-toast-cls",
      duration: 2000,
      keyboardClose: true,
      animated:true
    })
    toast.present();
  }
  async showErrorToastMessage(messageData) {
    if (this.toastCtrl) this.toastCtrl.dismiss();
    let toast = await this.toastCtrl.create({
      message: messageData,
      cssClass: "error-toast-cls",
      duration: 6000,
      keyboardClose: true
    });
    toast.present()
  }
  async showInternetToastMessage(messageData) {
    if (this.toastCtrl) this.toastCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message: messageData,
      cssClass: "error-toast-cls",
      duration: 6000,
      keyboardClose: true,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Enable',
          handler: () => {
            console.log("Success")
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present()
  }
  async showImageLoadingToast(toastMessage) {
    if (this.toastCtrl) this.toastCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      message: toastMessage,
      cssClass: '',
      duration: 3000
    })
    toast.present();
  }
  async showLoading() {
    if (this.loading) this.loading.dismiss();
    this.loading = await this.loadingCtrl.create({
      spinner: 'lines',
      duration: 10000,
      backdropDismiss: false,
      keyboardClose: false
    });
    await this.loading.present();
  }
  async showContinueloading() {
    if (this.loading) this.loading.dismiss();
    this.loading = await this.loadingCtrl.create({
      spinner: 'lines',
      message: 'Please wait...',
      duration: 100000,
      keyboardClose: true,
      backdropDismiss: true
    });
    await this.loading.present();
  }
  async hideLoading(): Promise<boolean> {
    // let resolveFunction: (confirm: boolean) => void;
    // let promise = new Promise<boolean>(resolve => {
    //   resolveFunction = resolve;
    // });
    if (this.loading) await this.loading.dismiss();
    return true;
  }

}
