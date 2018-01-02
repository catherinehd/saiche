import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class SetService {

  constructor(private httpService: HttpService) { }

  // 设置手机号
  setTelnum(id, username, tel) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        userNumber: tel
      }
    }) ;
  }

  // 设置提醒条数
  setSizeCustom(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        sizeCustom: type
      }
    }) ;
  }

  setSingleCustom(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        singleCustom: type
      }
    }) ;
  }

  setAndCustom(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        andCustom: type
      }
    }) ;
  }

  setLoongCustom(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        loongCustom: type
      }
    }) ;
  }

  // 设置提醒
  // 设置号码大小的当天遗漏提醒
  setSizeSameday(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        sizeSameday: type
      }
    }) ;
  }

  setSizeThisweek(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        sizeThisweek: type
      }
    }) ;
  }

  setSizeThismonth(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        sizeThismonth: type
      }
    }) ;
  }

  setSizeHistory(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        sizeHistory: type
      }
    }) ;
  }

  setSingleSameday(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        singleSameday: type
      }
    }) ;
  }

  setSingleThisweek(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        singleThisweek: type
      }
    }) ;
  }

  setSingleThismonth(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        singleThismonth: type
      }
    }) ;
  }

  setSingleHistory(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        singleHistory: type
      }
    }) ;
  }

  setAndSameday(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        andSameday: type
      }
    }) ;
  }

  setAndThisweek(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        andThisweek: type
      }
    }) ;
  }

  setAndThismonth(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        andThismonth: type
      }
    }) ;
  }

  setAndHistory(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        andHistory: type
      }
    }) ;
  }

  setLoongSameday(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        loongSameday: type
      }
    }) ;
  }

  setLoongThisweek(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        loongThisweek: type
      }
    }) ;
  }

  setLoongThismonth(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        loongThismonth: type
      }
    }) ;
  }

  setLoongHistory(id, username, type) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        loongHistory: type
      }
    }) ;
  }
}
