import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  bigtitle: string;
  modal: object;
  number: boolean;
  bigsmall: boolean;
  oneandtwo: boolean;
  confirmshow: boolean;
  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.confirmshow = false;

    this.modal = {
      isConfirmModalShow: true,
      confirmMsg: '提醒设置模块需登录才能使用，是否前去登录'
    };
  }

  ngOnInit() {
    if (this.router.url.includes('number')) {
      this.number = true;
      this.bigtitle = '号码';
    } else if (this.router.url.includes('bigsmall') || this.router.url.includes('singledouble') || this.router.url.includes('dragon')) {
      this.bigsmall = true;
      this.bigtitle = '走势图';
    } else {
      this.oneandtwo = true;
      this.bigtitle = '走势图';
    }
  }

  goPage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

  onConfirm(e) {
    if (e === 1) {
      this.navigateService.push();
      this.navigateService.pushToRoute('./login');
    } else {
      this.confirmshow = false;
    }
  }

  // 进入提醒设置页面
  goSetnews() {
    this.userService.islogin().subscribe( res => {
      if (res.json().ok) {
        this.navigateService.push();
        if (this.router.url.includes('bigsmall')) {
          this.navigateService.pushToRoute('set/bigsmall');
        } else if (this.router.url.includes('singledouble')) {
          this.navigateService.pushToRoute('set/singledouble');
        } else if (this.router.url.includes('onetwo')) {
          this.navigateService.pushToRoute('set/onetwo');
        } else if (this.router.url.includes('dragontiger')) {
          this.navigateService.pushToRoute('set/dragontiger');
        }
      } else {
        this.confirmshow = true;
      }
    });
  }
}
