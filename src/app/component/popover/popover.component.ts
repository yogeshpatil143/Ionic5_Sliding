import { Component, OnInit } from '@angular/core';
import { NavParams } from "@ionic/angular"
import { BaseWithInjectorServiceComponent } from 'src/app/base/base-service-injector';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent extends BaseWithInjectorServiceComponent implements OnInit {
  message: any
  userName: any;
  constructor(private navParams: NavParams) {
    super();
    this.userName = navParams.get('userName')
  }
  ngOnInit() { }
  dismissPopover() {
    this.popOverCtrl.dismiss()
      .then((success: any) => {
        this.globalService.logDetail("Successfully dismiss PopOver" + success)
        this.logout()
          .then((res: any) => {
            this.globalService.logDetail("Successfully Logout" + res)
          })
          .catch((error: any) => {
            this.globalService.logDetail(" Unsuccessfull" + error)
          })
      })
      .catch((error: any) => {
        this.globalService.logDetail("OH-Oh error while dismiss PopOver" + error)
      })
  }
}
