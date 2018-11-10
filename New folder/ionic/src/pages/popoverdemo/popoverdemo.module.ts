import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverdemoPage,BasicPage1 } from './popoverdemo';

@NgModule({
  declarations: [
    PopoverdemoPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicPage1),
  ],
})
export class PopoverdemoPageModule {}
