import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageOne } from './menudemo';

@NgModule({
  declarations: [
    
    PageOne,
    
  ],
  imports: [
    IonicPageModule.forChild(PageOne),
  ],
})
export class MenudemoPageModule {}
