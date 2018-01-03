import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class NewsService {

  constructor(private httpService: HttpService) { }

  // 获取消息  state 0 已读 1 未读
  getNewsList(userName, page) {
    return this.httpService.getMethod({
      url: 'web/news/queryNewsList/' + userName + '/' + page
    });
  }
}
