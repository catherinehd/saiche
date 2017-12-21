import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from './device.service';

@Injectable()
export class NavigateService {

  routeList: string[] = [];
  nextRoute = '/';
  isBack: boolean;

  constructor(private router: Router,
              private deviceService: DeviceService) { }


  clearRouteList() {
    this.routeList = [];
  }

  push(route: string = this.router.url) {
    this.routeList.push(route);
  }

  // 返回到前一个页面
  popRoute() {
    this.isBack = true;
    if (this.routeList.length > 0) {
      const lastRoute = this.routeList.pop();
      this.router.navigate([lastRoute]);
    } else {
      this.router.navigate(['./home']);
    }
  }

  // 进入页面
  pushToRoute(route: string, param?: any) {
    this.isBack = false;
    if (!param) {
      this.router.navigate([route]);
    } else {
      this.router.navigate([route, param]);
    }
  }

  pushToNextRoute() {
    this.router.navigate([this.nextRoute]);
  }

  storeNextRoute(route?: string) {
    this.nextRoute = route ? route : this.router.url;
  }
}
