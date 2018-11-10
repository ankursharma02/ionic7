import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegmentdemoPage } from './segmentdemo';

@NgModule({
  declarations: [
    SegmentdemoPage,
  ],
  imports: [
    IonicPageModule.forChild(SegmentdemoPage),
  ],
})
export class SegmentdemoPageModule {}
