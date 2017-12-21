import { Injectable } from '@angular/core';
import { NavigateService } from './navigate.service';
import { UserModel } from '../model/user.model';

@Injectable()
export class UserStoreService {
  user: UserModel;

  constructor(private navigateService: NavigateService) {}

  getUser() {
    if (!this.user) {
      if (localStorage.getItem('token')) {
        this.user = JSON.parse(localStorage.getItem('user'));
      } else {
        // this.navigateService.push();
        // this.navigateService.pushToRoute('/login');
      }
    }
    return this.user;
  }

  storeUser(user: any) {
    this.user = new UserModel(user);
    localStorage.setItem('token', user.access_token);
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = null;
  }

  refreshUser(nickName) {
    this.user.nickName = nickName;
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
