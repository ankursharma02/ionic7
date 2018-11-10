import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav,Menu } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavdemoPage, BasicPage } from '../pages/navdemo/navdemo';
import { BasicPage1 } from '../pages/popoverdemo/popoverdemo';
import { RangedemoPage } from '../pages/rangedemo/rangedemo';
import { SearchbardemoPage } from '../pages/searchbardemo/searchbardemo';
import { SegmentdemoPage } from '../pages/segmentdemo/segmentdemo';
import { SelectdemoPage } from '../pages/selectdemo/selectdemo';
import { SlidedemoPage } from '../pages/slidedemo/slidedemo';
import { TabdemoPage, BasicPage2 } from '../pages/tabdemo/tabdemo';
import { ToastdemoPage } from '../pages/toastdemo/toastdemo';
import { ToggledemoPage } from '../pages/toggledemo/toggledemo';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { PageOne } from '../pages/menudemo/menudemo';
import { ClearbuttondemoPage } from '../pages/clearbuttondemo/clearbuttondemo';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ankur', component: HelloIonicPage },
      { title: 'My First List ', component: ListPage },
      {title:'nav demo',component:BasicPage},
      {title:'popover demo',component:BasicPage1},
      {title:'range demo ',component:RangedemoPage},
      {title:'search bar demo',component:SearchbardemoPage},
      {title:'segment demo ',component:SegmentdemoPage},
      {title:'Select demo',component:SelectdemoPage},
      {title:'slide demo',component:SlidedemoPage},
      {title:'tab demo',component:BasicPage2},
      {title:'toast demo',component:ToastdemoPage},
      {title:'toggle demo',component:ToggledemoPage},
      {title:'toolbar demo',component:ToolbarPage},
      {title:'menu demo',component:PageOne},
      {title:'button demo',component:ClearbuttondemoPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
   //   this.statusBar.styleDefault();
    //  this.splashScreen.hide();
    this.menu.open();
  //  this.menu.swipeEnable(false);
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
   // this.menu.close();
    // navigate to the new page if it is not the current page
    this.menu.open();
    this.nav.setRoot(page.component);
  }
}
