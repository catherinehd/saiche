import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpService } from '../../service/http.service';
import { NavigateService } from '../../service/navigate.service';
import { DeviceService } from '../../service/device.service';
import { UserStoreService } from '../../service/user-store.service';
import { TrendService } from '../../service/trend.service';

@NgModule({
  imports: [
    CommonModule, HttpModule, BrowserAnimationsModule
  ],
  providers: [ NavigateService, HttpService, DeviceService, UserStoreService, TrendService ],
  exports: [ HttpModule, BrowserAnimationsModule ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
