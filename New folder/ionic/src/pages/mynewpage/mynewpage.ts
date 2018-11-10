import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MynewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mynewpage',
  templateUrl: 'mynewpage.html',
})
export class MynewpagePage {


  constructor(public alerCtrl: AlertController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Alert Demo!',
      message: 'u clicked to alert',
      buttons: ['Ok']
    });
    alert.present()
  }
}
