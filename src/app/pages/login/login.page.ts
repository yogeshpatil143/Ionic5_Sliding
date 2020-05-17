import { Component, OnInit, Input } from '@angular/core';
import { auth } from 'firebase/app';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BaseWithInjectorServiceComponent } from '../../base/base-service-injector';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BaseWithInjectorServiceComponent implements OnInit {
  public backgroundImage = 'assets/img/bgimage.jpg';
  @Input('formGroup') signInForm: FormGroup = new FormGroup({
    given_name: new FormControl(''),
    family_name: new FormControl(''),
    email: new FormControl('', [
      Validators.compose([Validators.required, Validators.email])
    ]),
    password: new FormControl('', [
      Validators.compose([Validators.minLength(6), Validators.required])
    ])
  });
  emailId: string;
  userId: string;
  constructor(public formBuilder: FormBuilder, public firestore: AngularFirestore, private firebaseAuth: AngularFireAuth) {
    super();
    // this.signInForm = this.formBuilder.group({
    //   email: ['', Validators.compose([Validators.required, Validators.email])],
    //   password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    // });
  }
  ngOnInit() {
  }
  async login() {
    let params;
    if (this.platform.is('android')) {
      params = {
        'webClientId': '351085525408-5k8ptearcq3n5hh4a88u9nf8o2jsau9d.apps.googleusercontent.com',
        'offline': true
      }
    }
    else {
      params = {}
    }
    this.googlePlus.login(params)
      .then((response) => {
        const { idToken, accessToken } = response
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error)
        this.globalService.showSimpleAlertMessage('Getting Error :' + JSON.stringify(error), "OK")
      });
  }
  onLoginSuccess(accessToken, accessSecret) {
    this.globalService.showLoading();
    const credential = accessSecret ? auth.GoogleAuthProvider
      .credential(accessToken, accessSecret) : auth.GoogleAuthProvider
        .credential(accessToken);
    this.firebaseAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.storage.set('emailId', response.user.email);
        this.storage.set('loginProfilePic', response.user.photoURL);
        this.storage.set("firebaseSuccessResponse", JSON.stringify(response.user))
        this.router.navigate(["/home"]);
        this.globalService.hideLoading();
      })
  }
  focusFunction(event) {
    console.log("event")
  }
  focusOutFunction(event) {
    console.log("event")
  }
  onLoginError(err) {
    console.log(err);
  }
  async signInWithUserCredentials() {
    if (!this.signInForm.valid) {
      this.globalService.showSimpleAlertMessage('Please check your valid credentials', "OK");
      return;
    } else {
      this.storage.clear();
      this.globalService.showLoading();
      await this.firebaseAuth.auth.signInWithEmailAndPassword(this.signInForm.value.email, this.signInForm.value.password)
        .then((data) => {
          if (data == null) {
            this.globalService.showToastMessage('Kindly check your credentials...' + data.user['email']);
            return;
          }
          else {
            if (data.user['email'] != null && data.user['uid'] != null) {
              this.emailId = data.user['email'];
              this.userId = data.user['uid'];
              this.storage.set("HAS_LOGGED_IN", true);
              this.storage.set('email', this.emailId);
              this.storage.set("useruid", this.userId);
              this.router.navigate(["/home"]);
              //await this.getUserRecord(emailId, userId);
              this.globalService.showToastMessage('You are successfully login with: ' + this.emailId);
            }
          }
        })
        .catch((error: any) => {
          this.globalService.hideLoading();
          switch (error.code) {
            case 'auth/invalid-api-key':
              this.globalService.showToastMessage(error.message);
              console.log("Error Detail " + error.message);
              break;
            case 'auth/user-not-found':
              this.globalService.showToastMessage(error.message);
              console.log("Error Detail " + error.message);
              break;
            default:
              this.globalService.showToastMessage(error.message);
              console.log("Error Detail " + error.message);
              break;
          }
        })
    }
  }
}
