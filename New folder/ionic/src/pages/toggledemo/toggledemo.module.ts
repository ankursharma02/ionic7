import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToggledemoPage } from './toggledemo';

@NgModule({
  declarations: [
    ToggledemoPage,
  ],
  imports: [
    IonicPageModule.forChild(ToggledemoPage),
  ],
})
export class ToggledemoPageModule {}
