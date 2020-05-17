function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-content class=\"\">\n  <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <div text-center>\n          <h4>Login</h4>\n        </div>\n        <div padding>\n          <ion-item>\n            <ion-input type=\"text\" placeholder=\"Username\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\n          </ion-item>\n        </div>\n\n        <div padding>\n          <ion-button size=\"large\" href=\"\" expand=\"block\">Login</ion-button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content> -->\n\n<ion-content>\n  <!-- <span class=\"logo\">Boots on Ground</span>\n  <div class=\"login-div\">\n    <form [formGroup]=\"signInForm\" id=\"signInForm\" (ngSubmit)=\"signInWithUserCredentials()\">\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input class=\"login-input\" value=\"user@bog.com\" type=\"email\" formControlName=\"email\" name=\"email\" required>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input class=\"login-input\" value=\"123456\" type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <div class=\"ion-padding\">\n        <ion-button expand=\"block\" class=\"ion-no-margin\" (click)=\"signInWithUserCredentials()\" color=\"primary\">Sign In\n        </ion-button>\n      </div>\n    </form>\n\n    <div (click)=\"login()\" class=\"google-btn\">\n      <div class=\"google-icon-wrapper\">\n        <img class=\"google-icon\" src=\"../../../assets/svg/google-signin.svg\" />\n      </div>\n      <p class=\"btn-text\"><b>Sign in with google</b></p>\n    </div>\n  </div> -->\n\n  <img class=\"wave\" src=\"../../../assets/img/wave.png\">\n  <div class=\"container\">\n    <div class=\"img\">\n      <img src=\"../../../assets/svg/bg.svg\">\n    </div>\n    <div class=\"login-content\">\n      <form [formGroup]=\"signInForm\" id=\"signInForm\" (ngSubmit)=\"signInWithUserCredentials()\">\n        <img src=\"../../../assets/svg/avatar.svg\">\n        <h2 class=\"title\">Welcome</h2>\n        <div class=\"input-div one\">\n          <div class=\"i\">\n            <i class=\"fas fa-user\"></i>\n          </div>\n          <div>\n            <ion-input (ionFocus)=\"focusFunction($event)\" (ionBlur)=\"focusOutFunction($event)\" formControlName=\"email\"\n              placeholder=\"Username\" name=\"email\" type=\"text\" class=\"input\">\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"input-div pass\">\n          <div class=\"i\">\n            <i class=\"fas fa-lock\"></i>\n          </div>\n          <div>\n            <ion-input (ionFocus)=\"focusFunction($event)\" (ionBlur)=\"focusOutFunction($event)\" placeholder=\"Password\"\n              formControlName=\"password\" name=\"password\" type=\"password\" class=\"input\">\n            </ion-input>\n          </div>\n        </div>\n        <a href=\"#\">Forgot Password?</a>\n        <ion-input type=\"submit\" class=\"btn\" value=\"Login\">\n        </ion-input>\n        <div (click)=\"login()\" class=\"google-btn\">\n          <div class=\"google-icon-wrapper\">\n            <img class=\"google-icon\" src=\"../../../assets/svg/google-signin.svg\" />\n          </div>\n          <p class=\"btn-text\"><b>Sign in with google</b></p>\n        </div>\n      </form>\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content.ion-background {\n  --background: url(\"/assets/img/bgimage.jpg\") no-repeat 31% 16% !important;\n}\n\n.google-btn {\n  width: 184px;\n  margin-left: 20%;\n  height: 42px;\n  background-color: #4285f4;\n  border-radius: 2px;\n  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);\n}\n\n.google-btn .google-icon-wrapper {\n  position: absolute;\n  margin-top: 1px;\n  margin-left: 1px;\n  width: 40px;\n  height: 40px;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.google-btn .google-icon {\n  margin-top: 11px;\n  margin-left: 3px;\n  width: 18px;\n  height: 18px;\n}\n\n.google-btn .btn-text {\n  float: right;\n  margin: 11px 16px 0 0;\n  color: #fff;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  font-family: \"Roboto\";\n}\n\n.google-btn:hover {\n  box-shadow: 0 0 6px #4285f4;\n}\n\n.google-btn:active {\n  background: #1669f2;\n}\n\n.logo {\n  display: block;\n  color: #5638b3;\n  font-size: 21px;\n  text-align: center;\n  margin-top: 29%;\n}\n\n.login-div {\n  display: block;\n  top: 36%;\n  position: absolute;\n  left: 8%;\n}\n\nion-grid {\n  width: 100%;\n  height: 100%;\n  background: #dfdfdf;\n}\n\nion-row {\n  height: 100%;\n}\n\nion-col {\n  border: 1px solid #488aff;\n  background: #fff;\n}\n\nion-button {\n  font-weight: 300;\n}\n\n@media (min-width: 240px) and (max-width: 768px) {\n  ion-grid {\n    background: #fff;\n  }\n\n  ion-col {\n    border: none;\n  }\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Poppins\", sans-serif;\n  overflow: hidden;\n}\n\n.wave {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  z-index: -1;\n}\n\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 7rem;\n  padding: 0 2rem;\n}\n\n.img {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.login-content {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  text-align: center;\n}\n\n.img img {\n  width: 500px;\n}\n\nform {\n  width: 360px;\n}\n\n.login-content img {\n  height: 100px;\n}\n\n.login-content h2 {\n  margin: 15px 0;\n  color: #333;\n  text-transform: uppercase;\n  font-size: 2.9rem;\n}\n\n.login-content .input-div {\n  position: relative;\n  display: grid;\n  grid-template-columns: 7% 93%;\n  margin: 25px 0;\n  padding: 5px 0;\n  border-bottom: 2px solid #d9d9d9;\n}\n\n.login-content .input-div.one {\n  margin-top: 0;\n}\n\n.i {\n  color: #d9d9d9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.i i {\n  transition: 0.3s;\n}\n\n.input-div > div {\n  position: relative;\n  height: 45px;\n}\n\n.input-div > div > h5 {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #999;\n  font-size: 18px;\n  transition: 0.3s;\n}\n\n.input-div:before,\n.input-div:after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  width: 0%;\n  height: 2px;\n  background-color: #38d39f;\n  transition: 0.4s;\n}\n\n.input-div:before {\n  right: 50%;\n}\n\n.input-div:after {\n  left: 50%;\n}\n\n.input-div.focus:before,\n.input-div.focus:after {\n  width: 50%;\n}\n\n.input-div.focus > div > h5 {\n  top: -5px;\n  font-size: 15px;\n}\n\n.input-div.focus > .i > i {\n  color: #38d39f;\n}\n\n.input-div > div > input {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: none;\n  padding: 0.5rem 0.7rem;\n  font-size: 1.2rem;\n  color: #555;\n  font-family: \"poppins\", sans-serif;\n}\n\n.input-div.pass {\n  margin-bottom: 4px;\n}\n\na {\n  display: block;\n  text-align: right;\n  text-decoration: none;\n  color: #999;\n  font-size: 0.9rem;\n  transition: 0.3s;\n}\n\na:hover {\n  color: #38d39f;\n}\n\n.btn {\n  display: block;\n  width: 100%;\n  height: 50px;\n  border-radius: 25px;\n  outline: none;\n  border: none;\n  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);\n  background-size: 200%;\n  font-size: 1.2rem;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n  text-transform: uppercase;\n  margin: 1rem 0;\n  cursor: pointer;\n  transition: 0.5s;\n}\n\n.btn:hover {\n  background-position: right;\n}\n\n@media screen and (max-width: 1050px) {\n  .container {\n    grid-gap: 5rem;\n  }\n}\n\n@media screen and (max-width: 1000px) {\n  form {\n    width: 290px;\n  }\n\n  .login-content h2 {\n    font-size: 2.4rem;\n    margin: 8px 0;\n  }\n\n  .img img {\n    width: 400px;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .container {\n    grid-template-columns: 1fr;\n  }\n\n  .img {\n    display: none;\n  }\n\n  .wave {\n    display: none;\n  }\n\n  .login-content {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL1lvZ2VzaC9Jb25pYy1mcmFtZXdvcmsgYmxvZy9CbG9nIFByb2plY3RzL0dvb2dsZV9QbHVzIGFuZCBTbGlkaW5nL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5RUFBQTtBQ0NGOztBREtBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQVBZO0VBUVosa0JBQUE7RUFDQSwyQ0FBQTtBQ0ZGOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBbEJJO0FDaUJSOztBREdFO0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRko7O0FESUU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQTlCSTtFQStCSixlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBRElFO0VBQ0UsMkJBQUE7QUNGSjs7QURJRTtFQUNFLG1CQXJDaUI7QUNtQ3JCOztBRFFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTEY7O0FEU0E7RUFDRSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ05GOztBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBbkJVO0VBb0JWLG1CQUFBO0FDTEY7O0FEUUE7RUFDRSxZQXhCVTtBQ21CWjs7QURRQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBOUJZO0FDeUJkOztBRFFBO0VBQ0UsZ0JBQUE7QUNMRjs7QURRQTtFQUNFO0lBQ0UsZ0JBdkNVO0VDa0NaOztFRE9BO0lBQ0UsWUFBQTtFQ0pGO0FBQ0Y7O0FETUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDSkY7O0FET0E7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0FDSkY7O0FET0E7RUFDRSxTQUFBO0FDSkY7O0FET0E7O0VBRUUsVUFBQTtBQ0pGOztBRE9BO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNFQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pGOztBRE1BO0VBQ0UsMEJBQUE7QUNIRjs7QURNQTtFQUNFO0lBQ0UsY0FBQTtFQ0hGO0FBQ0Y7O0FETUE7RUFDRTtJQUNFLFlBQUE7RUNKRjs7RURPQTtJQUNFLGlCQUFBO0lBQ0EsYUFBQTtFQ0pGOztFRE9BO0lBQ0UsWUFBQTtFQ0pGO0FBQ0Y7O0FET0E7RUFDRTtJQUNFLDBCQUFBO0VDTEY7O0VEUUE7SUFDRSxhQUFBO0VDTEY7O0VEUUE7SUFDRSxhQUFBO0VDTEY7O0VEUUE7SUFDRSx1QkFBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudC5pb24tYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWcvYmdpbWFnZS5qcGdcIikgbm8tcmVwZWF0IDMxJSAxNiUgIWltcG9ydGFudDtcbn1cbiR3aGl0ZTogI2ZmZjtcbiRnb29nbGUtYmx1ZTogIzQyODVmNDtcbiRidXR0b24tYWN0aXZlLWJsdWU6ICMxNjY5ZjI7XG5cbi5nb29nbGUtYnRuIHtcbiAgd2lkdGg6IDE4NHB4O1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRnb29nbGUtYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAuZ29vZ2xlLWljb24td3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICB9XG4gIC5nb29nbGUtaWNvbiB7XG4gICBcbiAgICBtYXJnaW4tdG9wOiAxMXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC5idG4tdGV4dCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbjogMTFweCAxNnB4IDAgMDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAkZ29vZ2xlLWJsdWU7XG4gIH1cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICRidXR0b24tYWN0aXZlLWJsdWU7XG4gIH1cbn1cbiR3aGl0ZS1jb2xvcjogI2ZmZjtcbiRoZWlnaHQxMDA6IDEwMCU7XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNTYzOGIzO1xuICBmb250LXNpemU6IDIxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjklO1xufVxuLmxvZ2luLWlucHV0IHtcbn1cbi5sb2dpbi1kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAzNiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOCU7XG59XG5pb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG4gIGJhY2tncm91bmQ6ICNkZmRmZGY7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6ICRoZWlnaHQxMDA7XG59XG5cbmlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDg4YWZmO1xuICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tZ3JpZCB7XG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xuICB9XG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndhdmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1nYXA6IDdyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuLmltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWcgaW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDM2MHB4O1xufVxuXG4ubG9naW4tY29udGVudCBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubG9naW4tY29udGVudCBoMiB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyLjlyZW07XG59XG5cbi5sb2dpbi1jb250ZW50IC5pbnB1dC1kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNyUgOTMlO1xuICBtYXJnaW46IDI1cHggMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDlkOWQ5O1xufVxuXG4ubG9naW4tY29udGVudCAuaW5wdXQtZGl2Lm9uZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5pIHtcbiAgY29sb3I6ICNkOWQ5ZDk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaSBpIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmlucHV0LWRpdiA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uaW5wdXQtZGl2ID4gZGl2ID4gaDUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pbnB1dC1kaXY6YmVmb3JlLFxuLmlucHV0LWRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhkMzlmO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uaW5wdXQtZGl2OmJlZm9yZSB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi5pbnB1dC1kaXY6YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5pbnB1dC1kaXYuZm9jdXM6YmVmb3JlLFxuLmlucHV0LWRpdi5mb2N1czphZnRlciB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pbnB1dC1kaXYuZm9jdXMgPiBkaXYgPiBoNSB7XG4gIHRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaW5wdXQtZGl2LmZvY3VzID4gLmkgPiBpIHtcbiAgY29sb3I6ICMzOGQzOWY7XG59XG5cbi5pbnB1dC1kaXYgPiBkaXYgPiBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW5wdXQtZGl2LnBhc3Mge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbmEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMzOGQzOWY7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMmJlOGYsICMzOGQzOWYsICMzMmJlOGYpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC1nYXA6IDVyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIGZvcm0ge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgfVxuXG4gIC5sb2dpbi1jb250ZW50IGgyIHtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgLmltZyBpbWcge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5pbWcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAud2F2ZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5sb2dpbi1jb250ZW50IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQuaW9uLWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2JnaW1hZ2UuanBnXCIpIG5vLXJlcGVhdCAzMSUgMTYlICFpbXBvcnRhbnQ7XG59XG5cbi5nb29nbGUtYnRuIHtcbiAgd2lkdGg6IDE4NHB4O1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBoZWlnaHQ6IDQycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1ZjQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cbi5nb29nbGUtYnRuIC5nb29nbGUtaWNvbi13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5nb29nbGUtYnRuIC5nb29nbGUtaWNvbiB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4uZ29vZ2xlLWJ0biAuYnRuLXRleHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogMTFweCAxNnB4IDAgMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cbi5nb29nbGUtYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDZweCAjNDI4NWY0O1xufVxuLmdvb2dsZS1idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzE2NjlmMjtcbn1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM1NjM4YjM7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyOSU7XG59XG5cbi5sb2dpbi1kaXYge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG9wOiAzNiU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOCU7XG59XG5cbmlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2RmZGZkZjtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWNvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0ODhhZmY7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjQwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICBpb24tZ3JpZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuXG4gIGlvbi1jb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxufVxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndhdmUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1nYXA6IDdyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuLmltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWcgaW1nIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDM2MHB4O1xufVxuXG4ubG9naW4tY29udGVudCBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubG9naW4tY29udGVudCBoMiB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyLjlyZW07XG59XG5cbi5sb2dpbi1jb250ZW50IC5pbnB1dC1kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNyUgOTMlO1xuICBtYXJnaW46IDI1cHggMDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDlkOWQ5O1xufVxuXG4ubG9naW4tY29udGVudCAuaW5wdXQtZGl2Lm9uZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5pIHtcbiAgY29sb3I6ICNkOWQ5ZDk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaSBpIHtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmlucHV0LWRpdiA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4uaW5wdXQtZGl2ID4gZGl2ID4gaDUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5pbnB1dC1kaXY6YmVmb3JlLFxuLmlucHV0LWRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICB3aWR0aDogMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhkMzlmO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uaW5wdXQtZGl2OmJlZm9yZSB7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi5pbnB1dC1kaXY6YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG59XG5cbi5pbnB1dC1kaXYuZm9jdXM6YmVmb3JlLFxuLmlucHV0LWRpdi5mb2N1czphZnRlciB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5pbnB1dC1kaXYuZm9jdXMgPiBkaXYgPiBoNSB7XG4gIHRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaW5wdXQtZGl2LmZvY3VzID4gLmkgPiBpIHtcbiAgY29sb3I6ICMzOGQzOWY7XG59XG5cbi5pbnB1dC1kaXYgPiBkaXYgPiBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjdyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogIzU1NTtcbiAgZm9udC1mYW1pbHk6IFwicG9wcGluc1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uaW5wdXQtZGl2LnBhc3Mge1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbmEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMzOGQzOWY7XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMmJlOGYsICMzOGQzOWYsICMzMmJlOGYpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBncmlkLWdhcDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIGZvcm0ge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgfVxuXG4gIC5sb2dpbi1jb250ZW50IGgyIHtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgLmltZyBpbWcge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLndhdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9naW4tY29udGVudCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _base_base_service_injector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../base/base-service-injector */
    "./src/app/base/base-service-injector.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var LoginPage = /*#__PURE__*/function (_base_base_service_in) {
      _inherits(LoginPage, _base_base_service_in);

      var _super = _createSuper(LoginPage);

      function LoginPage(formBuilder, firestore, firebaseAuth) {
        var _this;

        _classCallCheck(this, LoginPage);

        _this = _super.call(this);
        _this.formBuilder = formBuilder;
        _this.firestore = firestore;
        _this.firebaseAuth = firebaseAuth;
        _this.backgroundImage = 'assets/img/bgimage.jpg';
        _this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          given_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          family_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])])
        }); // this.signInForm = this.formBuilder.group({
        //   email: ['', Validators.compose([Validators.required, Validators.email])],
        //   password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        // });

        return _this;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var params;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.platform.is('android')) {
                      params = {
                        'webClientId': '351085525408-5k8ptearcq3n5hh4a88u9nf8o2jsau9d.apps.googleusercontent.com',
                        'offline': true
                      };
                    } else {
                      params = {};
                    }

                    this.googlePlus.login(params).then(function (response) {
                      var idToken = response.idToken,
                          accessToken = response.accessToken;

                      _this2.onLoginSuccess(idToken, accessToken);
                    })["catch"](function (error) {
                      console.log(error);

                      _this2.globalService.showSimpleAlertMessage('Getting Error :' + JSON.stringify(error), "OK");
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onLoginSuccess",
        value: function onLoginSuccess(accessToken, accessSecret) {
          var _this3 = this;

          this.globalService.showLoading();
          var credential = accessSecret ? firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider.credential(accessToken, accessSecret) : firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider.credential(accessToken);
          this.firebaseAuth.auth.signInWithCredential(credential).then(function (response) {
            _this3.storage.set('emailId', response.user.email);

            _this3.storage.set('loginProfilePic', response.user.photoURL);

            _this3.storage.set("firebaseSuccessResponse", JSON.stringify(response.user));

            _this3.router.navigate(["/home"]);

            _this3.globalService.hideLoading();
          });
        }
      }, {
        key: "focusFunction",
        value: function focusFunction(event) {
          console.log("event");
        }
      }, {
        key: "focusOutFunction",
        value: function focusOutFunction(event) {
          console.log("event");
        }
      }, {
        key: "onLoginError",
        value: function onLoginError(err) {
          console.log(err);
        }
      }, {
        key: "signInWithUserCredentials",
        value: function signInWithUserCredentials() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (this.signInForm.valid) {
                      _context2.next = 5;
                      break;
                    }

                    this.globalService.showSimpleAlertMessage('Please check your valid credentials', "OK");
                    return _context2.abrupt("return");

                  case 5:
                    this.storage.clear();
                    this.globalService.showLoading();
                    _context2.next = 9;
                    return this.firebaseAuth.auth.signInWithEmailAndPassword(this.signInForm.value.email, this.signInForm.value.password).then(function (data) {
                      if (data == null) {
                        _this4.globalService.showToastMessage('Kindly check your credentials...' + data.user['email']);

                        return;
                      } else {
                        if (data.user['email'] != null && data.user['uid'] != null) {
                          _this4.emailId = data.user['email'];
                          _this4.userId = data.user['uid'];

                          _this4.storage.set("HAS_LOGGED_IN", true);

                          _this4.storage.set('email', _this4.emailId);

                          _this4.storage.set("useruid", _this4.userId);

                          _this4.router.navigate(["/home"]); //await this.getUserRecord(emailId, userId);


                          _this4.globalService.showToastMessage('You are successfully login with: ' + _this4.emailId);
                        }
                      }
                    })["catch"](function (error) {
                      _this4.globalService.hideLoading();

                      switch (error.code) {
                        case 'auth/invalid-api-key':
                          _this4.globalService.showToastMessage(error.message);

                          console.log("Error Detail " + error.message);
                          break;

                        case 'auth/user-not-found':
                          _this4.globalService.showToastMessage(error.message);

                          console.log("Error Detail " + error.message);
                          break;

                        default:
                          _this4.globalService.showToastMessage(error.message);

                          console.log("Error Detail " + error.message);
                          break;
                      }
                    });

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginPage;
    }(_base_base_service_injector__WEBPACK_IMPORTED_MODULE_4__["BaseWithInjectorServiceComponent"]);

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('formGroup'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])], LoginPage.prototype, "signInForm", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map