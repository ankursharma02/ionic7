import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GesturedemoPage } from './gesturedemo';

@NgModule({
  declarations: [
    GesturedemoPage,
  ],
  imports: [
    IonicPageModule.forChild(GesturedemoPage),
  ],
})
export class GesturedemoPageModule {}
