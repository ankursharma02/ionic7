import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckboxdemoPage } from './checkboxdemo';

@NgModule({
  declarations: [
    CheckboxdemoPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckboxdemoPage),
  ],
})
export class CheckboxdemoPageModule {}
