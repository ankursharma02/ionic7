import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GriddemoPage } from './griddemo';

@NgModule({
  declarations: [
    GriddemoPage,
  ],
  imports: [
    IonicPageModule.forChild(GriddemoPage),
  ],
})
export class GriddemoPageModule {}
