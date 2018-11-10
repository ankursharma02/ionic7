import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoadingdemoPage } from './loadingdemo';

@NgModule({
  declarations: [
    LoadingdemoPage,
  ],
  imports: [
    IonicPageModule.forChild(LoadingdemoPage),
  ],
})
export class LoadingdemoPageModule {}
