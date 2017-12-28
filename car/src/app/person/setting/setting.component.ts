import { Component, OnInit, HostBinding } from '@angular/core';
import { UserStoreService } from '../../service/user-store.service';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { SlideToRightAnimation } from '../../shared/animations/slide-to-right.animation';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.styl'],
  animations: [ SlideToRightAnimation ]
})
export class SettingComponent implements OnInit {
  @HostBinding('@slideToRightAnimation') slideToRightAnimation = true;
  @HostBinding('class.page') page = true;
  modal = {
    isConfirmModalShow: false,
    confirmMsg: '您确定要退出登录吗？'
  };
  telnumber: string;
  constructor(private userStoreService: UserStoreService ,
              private userService: UserService,
              private navigateService: NavigateService) { }

  ngOnInit() {
    this.userService.islogin().subscribe( res => {
      this.telnumber = res.json().data.userName;
    });
  }

  confirm(status) {
    if (status) {
      this.logout();
    }
    this.modal.isConfirmModalShow = false;
  }

  logout() {
     this.userService.logout().subscribe(res => {
       this.navigateService.clearRouteList();
       localStorage.removeItem('user');
       this.navigateService.pushToRoute('./home');
     });
  }

}
