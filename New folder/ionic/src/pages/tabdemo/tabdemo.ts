import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the TabdemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  template: `
  <ion-header>
    <ion-navbar>
    <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
      <ion-title>Tabs</ion-title>
    
   
  </ion-navbar>
  
  </ion-header>
  <ion-content>

</ion-content>
`
})
export class TabdemoPage {

  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
  
  
<ion-tabs tabsPlacement="top" class="tabs-basic">
<ion-tab tabTitle="Music" tabIcon="musical-notes" (click)="music()" [root]="rootPage"></ion-tab>
<ion-tab tabTitle="Movies"tabIcon="image" (click)="movie()"  [root]="rootPage"></ion-tab>
<ion-tab tabTitle="Games" tabIcon="game-controller-a" (click)="game()" [root]="rootPage"></ion-tab>
</ion-tabs>

 
`})
export class BasicPage2 {
  
  rootPage =TabdemoPage;//=  BasicPage2;
  //rootPage1;
  music(){
    this.rootPage=MusicdemoPage;
    console.log("music demo");
  //  window.open("MusicdemoPage");
  }
  movie()
  {
    this.rootPage=MoviesdemoPage;
    console.log("movies demo");

  }
  game()
  {
    this.rootPage=GamedemoPage;
    console.log("game demo");

  }
 // rootPage=MusicdemoPage;
}



@Component({
  template: `
  <ion-header>
    <ion-navbar>
    <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
      <ion-title>Music</ion-title>

    </ion-navbar>
  </ion-header>
  <ion-content>
  <img src="assets/imgs/avatar-ts-woody.png">
  
  </ion-content>
`
})
export class MusicdemoPage {

  isAndroid: boolean = false;

   constructor(platform: Platform) {
     this.isAndroid = platform.is('android');
   }
}



@Component({
  template: `
  <ion-header>
    <ion-navbar>
    <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
      <ion-title>Movies</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
  </ion-content>
`
})
export class MoviesdemoPage {

  isAndroid: boolean = false;

   constructor(platform: Platform) {
     this.isAndroid = platform.is('android');
   }
}


@Component({
  template: `
  <ion-header>
    <ion-navbar>
    <button ion-button menuToggle>
          <ion-icon name="menu"></ion-icon>
        </button>
      <ion-title>Games</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
  </ion-content>
`
})
export class GamedemoPage {

  isAndroid: boolean = false;

   constructor(platform: Platform) {
     this.isAndroid = platform.is('android');
   }
}
