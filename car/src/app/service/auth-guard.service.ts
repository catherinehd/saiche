import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { NavigateService } from '../service/navigate.service';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private navigateService: NavigateService,
              private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    url = url === '/setting' ? '/person' : url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url) {
    if (!localStorage.getItem('bjscuser')) {
      // this.navigateService.storeNextRoute(url);
      // this.navigateService.pushToRoute('/login');
      return false;
      }
      return true;
    }
  }

