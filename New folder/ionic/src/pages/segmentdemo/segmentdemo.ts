import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the SegmentdemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  
  templateUrl: 'segmentdemo.html',
})
export class SegmentdemoPage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
