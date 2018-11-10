import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabdemoPage,BasicPage2,MusicdemoPage,MoviesdemoPage, GamedemoPage } from './tabdemo';

@NgModule({
  declarations: [
    TabdemoPage,
    MusicdemoPage,
    MoviesdemoPage,
    GamedemoPage
  ],
  imports: [
    IonicPageModule.forChild(BasicPage2),
  ],
})
export class TabdemoPageModule {}
