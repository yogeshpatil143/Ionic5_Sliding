import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import * as firebase from 'firebase';
import { CameraOptions } from '@ionic-native/camera/ngx'
import { BaseWithInjectorServiceComponent } from '../../base/base-service-injector';
import { PopoverComponent } from '../../component/popover/popover.component';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage extends BaseWithInjectorServiceComponent implements OnInit {
  loginProfilePic: any;
  showFabIcon: boolean;
  mainPredictionArray = [];
  userEmailId: any;
  conversationDetail: any;
  objResponse: any[];
  userDisplayName: any;
  constructor() {
    super();
  }
  ngOnInit() {
    this.loadDependecy();
    this.getPredictionFromFirebase()
  }
  ionSlideAfterInit() {
    this.globalService.logDetail("Event Called ")
  }
  async pickImage(id) {
    this.globalService.showLoading();
    try {
      const options: CameraOptions = {
        quality: 10,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.ALLMEDIA,
        sourceType: this.camera.PictureSourceType.CAMERA
      };
      let cameraInfo = await this.camera.getPicture(options);
      let blobInfo = await this.makeFileIntoBlob(cameraInfo);
      let uploadInfo: any = await this.uploadToFirebase(blobInfo);
      this.globalService.hideLoading()
        .then((res: boolean) => {
          if (res) {
            this.globalService.showSimpleAlertMessage("File Upload Success " + uploadInfo.fileName, "OK");
          }
        })
    }
    catch (e) {
      console.log(e.message);
      this.globalService.hideLoading()
        .then((res: boolean) => {
          if (res)
            this.globalService.showSimpleAlertMessage("File Upload Error " + e.message, "OK");
        })
    }
  }
  async getPredictionFromFirebase() {


    // firebase.firestore().collection('MainPrediction').get().then(series => series.forEach(item => {
    //   console.log(item.id);
    //   let chatCollection = firebase.firestore().collection('MainPrediction').doc(item.id).collection('Chat')
    //     .get()
    //     .then(chatResponse => {
    //       const data = chatResponse.data();
    //       const id = chatResponse.id;
    //       return { id, serId, ...data };
    //     });

    // }));





    this.mainPredictionArray = [];
    let db = firebase.firestore().collection('MainPrediction');
    await db.get()
      .then(async querySnapshot => {
        await querySnapshot.forEach(async doc => {
          let response = doc.data();
          response.id = doc.id;
          response['chatResponse'] = []
          this.mainPredictionArray.push(response);
          await db.doc(response.id).collection('Chat')
            .get()
            .then(async querySnapshot => {
              await querySnapshot.forEach(chat => {
                let chatResponse = chat.data();
                chatResponse.id = chat.id;
                if (this.mainPredictionArray.length > 0) {
                  this.objResponse = this.mainPredictionArray.filter(object => {
                    if (object.id == chatResponse.predictionId)
                      object['chatResponse'].push(chatResponse);
                    return;
                  })
                }
                // response['chatResponse'] = [chatResponse]
                // this.mainPredictionArray.push(response)
              })
            })
        })
      })
    console.log("Main Prediction = " + JSON.stringify(this.mainPredictionArray))
  }
  slideChanged(slides: IonSlides) {
    slides.getActiveIndex().then((index: number) => {
      console.log(index);
      this.globalService.logDetail("Event Called " + index)
    });

  }
  async saveConversation(id) {
    let message = "";
    this.globalService.showLoading()
    let db = firebase.firestore().collection('MainPrediction');
    let data = { userDisplayName: this.userDisplayName, conversation: this.conversationDetail, dateinfo: moment(Date.now()).format('YYYYMMDD'), predictionId: id, userEmail: this.userEmailId, userProfilePic: this.loginProfilePic }
    db.doc(id).collection('Chat').add(data)
      .then((res: any) => {
        message = "Message saved successfully";
        this.globalService.logDetail(res);
      })
      .catch((error: any) => {
        message = "Message not saved successfully";
        this.globalService.logDetail(error);
      })
      .finally(() => {
        this.globalService.hideLoading()
          .then((res) => {
            this.globalService.showToastMessage(message);
            this.conversationDetail = "";
            this.getPredictionFromFirebase();
          })
      })
  }
  async sharePrediction(inputs) {
    switch (inputs) {
      case "facebook": {
        this.socialSharing.shareViaFacebook("share Via Facebook")
          .then((res: any) => {
            console.log("Success =" + inputs)
          })
        break;
      }
      case "instagram": {
        this.socialSharing.shareViaInstagram("share Via Instagram", "Image")
          .then((res: any) => {
            console.log("Success =" + inputs)
          })
        break;
      }
      case "google": {
        this.socialSharing.shareViaEmail("share Via Gmail", "Image", ["y@gmail.com"])
          .then((res: any) => {
            console.log("Success =" + inputs)
          })
        break;
      }
      case "twitter": {
        this.socialSharing.shareViaTwitter("share Via Instagram", "Image")
          .then((res: any) => {
            console.log("Success =" + inputs)
          })
        break;
      }
      default: {
        this.socialSharing.shareVia("share Via Instagram", "Image")
          .then((res: any) => {
            console.log("Success =" + inputs)
          })
        break;
      }
    }
  }
  async openPopOver(event: any) {
    const popover = await this.popOverCtrl.create({
      component: PopoverComponent,
      event: event,
      componentProps: { "userName": this.userDisplayName },
      translucent: true,
      backdropDismiss: true,
      keyboardClose: false,
      animated: true,
      mode: "ios",
      showBackdrop: false
    });
    return await popover.present();
  }

  // FILE STUFF
  makeFileIntoBlob(_imagePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = "";
      this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          let { name, nativeURL } = fileEntry;

          // get the path..
          let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
          console.log("path", path);
          console.log("fileName", name);

          fileName = name;

          // we are provided the name, so now read the file into
          // a buffer
          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          let imgBlob = new Blob([buffer], {
            type: "image/jpeg"
          });
          console.log(imgBlob.type, imgBlob.size);
          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
    });
  }

  /**
   *
   * @param _imageBlobInfo
   */
  uploadToFirebase(_imageBlobInfo) {
    console.log("uploadToFirebase");
    return new Promise((resolve, reject) => {
      let fileRef = firebase.storage().ref("images/" + _imageBlobInfo.fileName);
      let uploadTask = fileRef.put(_imageBlobInfo.imgBlob);

      uploadTask.on(
        "state_changed",
        (_snapshot: any) => {
          console.log(
            "snapshot progess " +
            (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100
          );
        },
        _error => {
          console.log(_error);
          reject(_error);
        },
        () => {
          // completion...
          resolve(uploadTask.snapshot);
        }
      );
    });
  }
  loadDependecy() {
    this.storage.get('firebaseSuccessResponse')
      .then((firebaseSuccessResponse) => {
        let res = JSON.parse(firebaseSuccessResponse)
        this.loginProfilePic = res.photoURL;
        this.userEmailId = res.email;
        this.userDisplayName = res.displayName
      })
    this.showFabIcon = true;
    this.keyBoard.onKeyboardWillShow().subscribe(async () => {
      this.ngZone.run(() => {
        this.showFabIcon = false;
      })
    })
    this.keyBoard.onKeyboardWillHide().subscribe(async () => {
      this.ngZone.run(() => {
        this.showFabIcon = true;
      })
    })
  }

}
