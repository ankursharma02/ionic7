import { Component } from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular'
 @Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public actionSheetCtrl: ActionSheetController) {

  }
  msg:string="demo";

  presentActionSheet() {
    this.msg="msg"; 
  
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
            this.msg=" u clicked Destructive";
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
            this.msg="u clicked Archive"
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.msg="u clicked cancel";
          }
              
        }
      ]
    });
    actionSheet.present();
  }
 // msg=new this.presentActionSheet().msg;

 
}
