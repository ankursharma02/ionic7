import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListcardPage } from './listcard';

@NgModule({
  declarations: [
    ListcardPage,
  ],
  imports: [
    IonicPageModule.forChild(ListcardPage),
  ],
})
export class ListcardPageModule {}
