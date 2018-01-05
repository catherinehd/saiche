import { Component, OnInit, Output, Input, OnDestroy, EventEmitter } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { NewsService } from '../../service/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.styl']
})
export class TabComponent implements OnInit, OnDestroy {
  homeurl: string;
  @Output() godefault = new EventEmitter();
  // @Input() hasnews: boolean;
  hasnews: boolean;
  confirmshow: boolean;
  modal: object;
  newsNum: number;
  timer: any;
  goUrl: string;

  constructor(private navigateService: NavigateService,
              private newsService: NewsService,
              private router: Router,
              private userService: UserService) {
    this.homeurl = 'home';
    this.modal = {
      isConfirmModalShow: true,
      confirmMsg: '提醒设置模块需登录才能使用，是否前去登录'
    };
  }

  ngOnInit() {
    this.getNewsNumber();
    this.timer = setInterval(() => {this.getNewsNumber(); }, 10000);
  }

  ngOnDestroy() {
    // 清除循环
    clearInterval(this.timer);
  }

  // 获取未读信息数量
  getNewsNumber() {
    this.newsService.getNewsNumber().subscribe( res => {
      if (res.json().data) {
        if (this.router.url.includes('news')) {
          this.hasnews = false;
        } else {
          this.hasnews = true;
          this.newsNum = res.json().data;
        }
      } else {
        this.hasnews = false;
      }
    });
  }

  goSetnews() {
    if (localStorage.getItem('user')) {
      this.navigateService.push();
      this.navigateService.pushToRoute('set');
    } else {
      this.modal = {
        isConfirmModalShow: true,
        confirmMsg: '提醒设置模块需登录才能使用，是否前去登录'
      }
      this.confirmshow = true;
      this.goUrl = 'set';
    }
  }

  goGetnews() {
    if (localStorage.getItem('user')) {
      this.navigateService.push();
      this.navigateService.pushToRoute('news');
    } else {
      this.modal = {
        isConfirmModalShow: true,
        confirmMsg: '消息模块需登录才能使用，是否前去登录'
      }
      this.confirmshow = true;
      this.goUrl = 'news';
    }
  }

  onConfirm(e) {
    if (e === 1) {
      this.navigateService.storeNextRoute(this.goUrl);
      this.navigateService.pushToRoute('./login');
    } else {
      this.confirmshow = false;
    }
  }

}
