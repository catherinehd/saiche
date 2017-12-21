import { Injectable } from '@angular/core';
import { DeviceConfig } from '../config/config';

@Injectable()
export class DeviceService {
  deviceReady: boolean;
  isApp: boolean;
  isIos: boolean;
  isAndroid: boolean;

  constructor() {
    this.getDeviceName();
  }

  getDeviceName() {
    try {
      if (cordova && cordova.platformId) {
        this.isApp = true;
        this.isApp = cordova.platformId === 'android';
        console.log('device---' + cordova.platformId);
        this.isIos = !this.isAndroid;
        this.deviceReady = true;
      } else {
        this.sameAsDeviceConfig();
      }
    }catch (e) {
      console.log('device-service-----', e );
      this.sameAsDeviceConfig();
      this.deviceReady = false;
    }
  }

  sameAsDeviceConfig() {
    this.isApp = DeviceConfig.isApp;
    this.isAndroid = DeviceConfig.isAndroid;
    this.isIos = DeviceConfig.isIos;
  }

}
