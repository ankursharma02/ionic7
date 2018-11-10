import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToastdemoPage } from './toastdemo';

@NgModule({
  declarations: [
    ToastdemoPage,
  ],
  imports: [
    IonicPageModule.forChild(ToastdemoPage),
  ],
})
export class ToastdemoPageModule {}
