import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiList } from '../config/apiList';

@Injectable()
export class TrendService {

  constructor(private httpService: HttpService) { }

  // 获取号码列表
  getNumberList(page) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpkList/' + page
    });
  }

  // 大小走势
  getBigsmallList(size) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpksizeList',
      data: {
      size: size
      }
     });
    }

    // 单双走势
  getSingledoubleList(size) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpksingleList',
      data: {
        size: size
      }
    });
  }

  // 冠亚和值
  getOnetwoList(size) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpkandList',
      data: {
        size: size
      }
    });
  }

  // 龙虎
  getDragontigerList(size) {
    return this.httpService.getMethod( {
      url: 'web/bjpk/queryBjpkloongList',
      data: {
        size: size
      }
    });
  }
}
