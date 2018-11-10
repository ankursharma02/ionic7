import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidedemoPage } from './slidedemo';

@NgModule({
  declarations: [
    SlidedemoPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidedemoPage),
  ],
})
export class SlidedemoPageModule {}
