import { Injectable, isDevMode } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, timeout, take, tap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {
    private observableResp: Observable<any>;
    loading: HTMLIonLoadingElement;
    // jwt implementation
    // public authToken: string;

    constructor(public http: HttpClient, public loadingCtrl: LoadingController) { }

    // get(service: string, params?: any): Observable<any> {
    //     return this.fetchData('GET', service, params);
    // }

    // post(service: string, params?: any, contentType?: any): Observable<any> {
    //     return this.fetchData('POST', service, params, contentType);
    // }

    // put(service: string, params?: any, contentType?: any): Observable<any> {
    //     return this.fetchData('PUT', service, params, contentType);
    // }
    // upload() { }

    // // Need to uncomment on implementation of JWT
    // protected getHeaders(
    //     method?: string,
    //     params?: any,
    //     contentType?: string
    // ): any {
    //     const requestOptions = {
    //         params: null,
    //         headers: null
    //     };
    //     const headers = new HttpHeaders();
    //     headers.append('Content-Type', contentType || 'application/json');

    //     // for jwt implementation
    //     // if (this.authToken) {
    //     //     headers.append('Authorization', 'Bearer ' + this.authToken);
    //     // }

    //     // for file download or upload if needed
    //     // if (contentType) {
    //     //   requestoptions.responseType = ResponseContentType.Blob;
    //     // };
    //     // need to remove creqid

    //     const urlParams: URLSearchParams = new URLSearchParams();
    //     if (params && method === 'GET') {
    //         for (const key in params) {
    //             if (params.hasOwnProperty(key)) {
    //                 const val = params[key];
    //                 urlParams.append(key, val);
    //             }
    //         }
    //     }
    //     requestOptions.params = urlParams;
    //     requestOptions.headers = headers;
    //     return requestOptions;
    // }

    // private fetchData(
    //     method: string,
    //     endpoint: string,
    //     body: any,
    //     contentType?: any
    // ): Observable<any> {
    //     return new Observable(observer => {
    //         // Check environment
    //         // environment.base_url = isDevMode() ? document.baseURI : environment.base_url;

    //         this.getUserInfo().then(userInfo => {
    //             if (navigator.onLine) {
    //                 if (!body) {
    //                     body = {};
    //                 }
    //                 switch (method) {
    //                     case 'GET':
    //                         console.log('environment.base_url + endpoint:', environment.base_url + endpoint);
    //                         this.observableResp = this.http.get(
    //                             environment.base_url + endpoint,
    //                             this.getHeaders(method, body)
    //                         );
    //                         break;
    //                     case 'PUT':
    //                         this.observableResp = this.http.put(
    //                             environment.base_url + endpoint,
    //                             body,
    //                             this.getHeaders(method, null, contentType)
    //                         );
    //                         break;
    //                     case 'POST':
    //                         console.log(body);
    //                         console.log('url post:', environment.base_url + endpoint);
    //                         this.observableResp = this.http.post(
    //                             environment.base_url + endpoint,
    //                             body,
    //                             this.getHeaders(method, null, contentType)
    //                         );
    //                         break;
    //                 }

    //                 this.observableResp
    //                     .pipe(
    //                         timeout(environment.HTTP_TIMEOUT),
    //                         map(res => {
    //                             // if (downloadAsFile) {
    //                             //   return { filename: res.headers.get('Content-Disposition'), file: res.blob(), filetype: res.headers.get('Content-Type') };
    //                             // } else
    //                             // if (endpoint.includes('Login')) {
    //                             //   return _.merge(
    //                             //     { token: res.headers.get('Authorization') },
    //                             //     res.json()
    //                             //   );
    //                             // } else
    //                             if (res.status === 204) {
    //                                 return [];
    //                             } else {
    //                                 return res;
    //                             }
    //                         }),
    //                         take(1)
    //                     )
    //                     .subscribe(
    //                         response => {
    //                             this.dismissLoader().then(() => {
    //                                 observer.next(response);
    //                             });
    //                         },
    //                         err => {
    //                             this.dismissLoader().then(() => {
    //                                 this.handleCatchErrors(err, observer);
    //                             });
    //                         }
    //                     );
    //             } else {
    //                 this.dismissLoader().then(() => {
    //                     this.handleCatchErrors({ error: 'offline' }, observer);
    //                 });
    //             }
    //         });
    //     });
    // }

    // // Code to Handle errors in Base and Authorization service.
    // public handleCatchErrors(err, observer, reAuthRequired = false) {
    //     if (err.status === 401) {
    //         observer.error({ status: err.status, message: JSON.parse(err._body) });
    //     } else if (err.name === 'TimeoutError') {
    //         observer.error({
    //             status: false,
    //             message: 'Please connect to a stable internet',
    //             data: null
    //         });
    //     } else if (err.error === 'offline') {
    //         observer.error({
    //             status: false,
    //             message: 'Please connect to a internet',
    //             data: null
    //         });
    //     } else {
    //         observer.error(err);
    //     }
    // }

    presentLoader(): Promise<any> {
        // this.loading = this.loadingCtrl.create({
        //   content: 'Please wait...',
        //   spinner: 'dots',
        //   showBackdrop: true,
        //   enableBackdropDismiss: true
        // });
        // return this.loading.present();
        return Promise.resolve(true);
    }

    dismissLoader(): Promise<any> {
        // return this.loading.dismiss();
        return Promise.resolve(true);
    }

    getUserInfo(): Promise<any> {
        return new Promise((resolve, reject) => {
            // this.cache.getItem('userInfo').then(userInfo => {
            //     resolve(userInfo);
            // })
            //     .catch(err => {
            //         resolve(null);
            //     });
            resolve();
        });
    }
}