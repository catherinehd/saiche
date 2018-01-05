import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiList } from '../config/apiList';

@Injectable()
export class TrendService {

  constructor(private httpService: HttpService) { }

  // 获取号码列表
  getNumberList(page, username) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpkList/' + page,
      data: {
        userName: username
      }
    });
  }

  // 大小走势 size 0:冠军，1 远征军， 以此类推
  getBigsmallList(size) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpksizeList/' + size,
     });
    }

    // 单双走势
  getSingledoubleList(size) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpksingleList/' + size,
    });
  }

  // 冠亚和值
  getOnetwoList() {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpkandList',
    });
  }

  // 龙虎
  getDragontigerList(size) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpkloongList/' + size,
    });
  }
}
