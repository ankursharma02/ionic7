import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasiccardPage } from './basiccard';

@NgModule({
  declarations: [
    BasiccardPage,
  ],
  imports: [
    IonicPageModule.forChild(BasiccardPage),
  ],
})
export class BasiccardPageModule {}
