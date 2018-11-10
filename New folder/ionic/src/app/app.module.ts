import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MynewpagePage } from '../pages/mynewpage/mynewpage';
import { Alert2Page } from '../pages/alert2/alert2';
import { RadiodemoPage } from '../pages/radiodemo/radiodemo';
import { CheckboxdemoPage } from '../pages/checkboxdemo/checkboxdemo';
import { BadgessdemoPage } from '../pages/badgessdemo/badgessdemo';
import { ButtondemoPage } from '../pages/buttondemo/buttondemo';
import { ClearbuttondemoPage } from '../pages/clearbuttondemo/clearbuttondemo';
import { ComponentbuttonPage } from '../pages/componentbutton/componentbutton';
import { BasiccardPage } from '../pages/basiccard/basiccard';
import { ListcardPage } from '../pages/listcard/listcard';
import { BackgroundimgcardPage } from '../pages/backgroundimgcard/backgroundimgcard';
import { AdvsocialcardPage } from '../pages/advsocialcard/advsocialcard';
import { MapcardPage } from '../pages/mapcard/mapcard';
import { DatetimedemoPage } from '../pages/datetimedemo/datetimedemo';
import { FabsPage } from '../pages/fabs/fabs';
import { GesturedemoPage } from '../pages/gesturedemo/gesturedemo';
import { GriddemoPage } from '../pages/griddemo/griddemo';
import { IcondemoPage } from '../pages/icondemo/icondemo';
import { InputdemoPage } from '../pages/inputdemo/inputdemo';
import { ListdemooPage } from '../pages/listdemoo/listdemoo';
import { LoadingdemoPage } from '../pages/loadingdemo/loadingdemo';
import{PageOne} from '../pages/menudemo/menudemo';
import { ModaldemoPage, ModalContentPage } from '../pages/modaldemo/modaldemo';
import { NavdemoPage, BasicPage } from '../pages/navdemo/navdemo';
import { PopoverdemoPage, BasicPage1 } from '../pages/popoverdemo/popoverdemo';
import { RangedemoPage } from '../pages/rangedemo/rangedemo';
import { SearchbardemoPage } from '../pages/searchbardemo/searchbardemo';
import { SegmentdemoPage } from '../pages/segmentdemo/segmentdemo';
import { SelectdemoPage } from '../pages/selectdemo/selectdemo';
import { SlidedemoPage } from '../pages/slidedemo/slidedemo';
import { TabdemoPage, BasicPage2, MusicdemoPage, MoviesdemoPage, GamedemoPage } from '../pages/tabdemo/tabdemo';
import { ToastdemoPage } from '../pages/toastdemo/toastdemo';
import { ToggledemoPage } from '../pages/toggledemo/toggledemo';
import { ToolbarPage } from '../pages/toolbar/toolbar';

 

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MynewpagePage,
    Alert2Page,
    RadiodemoPage,
    CheckboxdemoPage,
    BadgessdemoPage,
    ButtondemoPage,
    ClearbuttondemoPage,
    ComponentbuttonPage,
    BasiccardPage,
    ListcardPage,
    BackgroundimgcardPage,
    AdvsocialcardPage,
    MapcardPage,
    DatetimedemoPage,
    FabsPage,
    GesturedemoPage,
    GriddemoPage,
    IcondemoPage,
    InputdemoPage,
    ListdemooPage,
    LoadingdemoPage,
    PageOne,
    ModaldemoPage,
    ModalContentPage,
    NavdemoPage,
    BasicPage,
    PopoverdemoPage,
    BasicPage1,
    RangedemoPage,
    SearchbardemoPage,
    SegmentdemoPage,
    SelectdemoPage,
    SlidedemoPage,
    TabdemoPage,
    BasicPage2,
    MusicdemoPage,
    MoviesdemoPage,
    GamedemoPage,
    ToastdemoPage,
    ToggledemoPage,
    ToolbarPage

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{},{ links: [
      { component: ModaldemoPage, name: 'modaldemo', segment: 'modaldemo1' }
    ]}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MynewpagePage,
    Alert2Page,
    RadiodemoPage,
    CheckboxdemoPage,
    BadgessdemoPage,
    ButtondemoPage,
    ClearbuttondemoPage,
    ComponentbuttonPage,
    BasiccardPage,
    ListcardPage,
    BackgroundimgcardPage,
    AdvsocialcardPage,
    MapcardPage,
    DatetimedemoPage,
    FabsPage,
    GesturedemoPage,
    GriddemoPage,
    IcondemoPage,
    InputdemoPage,
    ListdemooPage,
    LoadingdemoPage,
    PageOne,
    ModalContentPage,
    ModalContentPage,
    NavdemoPage,
    BasicPage,
    PopoverdemoPage,
    BasicPage1,
    RangedemoPage,
    SearchbardemoPage,
    SegmentdemoPage,
    SelectdemoPage,
    SlidedemoPage,
    TabdemoPage,
    BasicPage2,
    MusicdemoPage,
    MoviesdemoPage,
    GamedemoPage,
    ToastdemoPage,
    ToggledemoPage,
    ToolbarPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
