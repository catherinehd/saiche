import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserStoreService } from '../../service/user-store.service';
import { UserService } from '../../service/user.service';
import { DelayLeaveAnimation } from '../../shared/animations/delay-leave.animation';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl'],
  animations: [DelayLeaveAnimation]
})
export class IndexComponent implements OnInit{
  nickName: string;
  telnum: string;
  @HostBinding('@delayLeaveAnimation') delayLeaveAnimation = true;
  @HostBinding('class.page') page = true;
  constructor(private navigateSerivce: NavigateService,
              private userService: UserService,
              private userStoreService: UserStoreService) {
    // if (localStorage.getItem('bjscuser')) {
    //   this.getInfo();
    // } else {
    //   this.nickName = '';
    // }
  }

  ngOnInit() {
    this.userService.islogin().subscribe( res => {
      if (res.json().msg === 'OK') {
        this.nickName = res.json().data.userNamenick;
        this.telnum = res.json().data.userName;
        localStorage.setItem('bjscuser', res.json().data.userName);
      } else {
        localStorage.removeItem('bjscuser');
        this.nickName = '';
      }
    });
  }

  // getInfo() {
  //   const user = this.userService.islogin().subscribe( res => {
  //     if (res.json().msg === 'OK') {
  //       this.nickName = res.json().data.userNamenick;
  //       this.telnum = res.json().data.userName;
  //     }
  //   });
  // }

  goPage(page) {
    if (localStorage.getItem('bjscuser')) {
      this.navigateSerivce.push();
      this.navigateSerivce.pushToRoute(page);
    } else {
      this.navigateSerivce.push();
      this.navigateSerivce.storeNextRoute(page);
      this.navigateSerivce.pushToRoute('./login');
    }
  }

  go(page) {
    this.navigateSerivce.push();
    this.navigateSerivce.pushToRoute(page);
  }

  pushToUserInfo() {
    if (!this.nickName) { return; }
    this.goPage('/personal-info');
  }
}
