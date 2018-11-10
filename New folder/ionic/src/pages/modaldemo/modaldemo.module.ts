import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModaldemoPage,ModalContentPage } from './modaldemo';

@NgModule({
  declarations: [
    ModaldemoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModaldemoPage),
  ],
})
export class ModaldemoPageModule {}
