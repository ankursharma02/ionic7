import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavdemoPage,BasicPage } from './navdemo';

@NgModule({
  declarations: [
    NavdemoPage,
    BasicPage
  ],
  imports: [
    IonicPageModule.forChild(BasicPage),
  ],
})
export class NavdemoPageModule {}
