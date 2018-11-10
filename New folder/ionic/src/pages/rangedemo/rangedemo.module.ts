import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RangedemoPage } from './rangedemo';

@NgModule({
  declarations: [
    RangedemoPage,
  ],
  imports: [
    IonicPageModule.forChild(RangedemoPage),
  ],
})
export class RangedemoPageModule {}
