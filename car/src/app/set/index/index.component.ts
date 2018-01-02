import { Component, OnInit, OnChanges } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit, OnChanges {

  hasmsgnum: number; // 剩余短信条数
  tel: string; // 接收提醒的手机号

  constructor(private navigateService: NavigateService,
              private userService: UserService,) {
  }

  ngOnInit() {
    this.userService.islogin().subscribe( res => {
      this.hasmsgnum = res.json().data.userQuota;
      this.tel = res.json().data.userNumber;
    });
  }

  ngOnChanges() {
  }

  goPage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }
}
