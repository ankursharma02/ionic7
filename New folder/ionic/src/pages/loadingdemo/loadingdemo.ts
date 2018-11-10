import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingdemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loadingdemo',
  templateUrl: 'loadingdemo.html',
})
export class LoadingdemoPage {

  constructor(public loadingCtrl: LoadingController) { }
  msg:string="assets/imgs/avatar-ts-bopeep.png";
  hidd:string="true";
  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 4000,
      dismissOnPageChange: true
   
    }).present();
    this.msg="assets/imgs/advance-card-tmntr.jpg";
    this.hidd="false";
  }

}
