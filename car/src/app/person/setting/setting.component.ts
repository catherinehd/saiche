import { Component, OnInit, HostBinding } from '@angular/core';
import { UserStoreService } from '../../service/user-store.service';
import { NavigateService } from '../../service/navigate.service';
// import { ServicefalseService } from '../../service/servicefalse.service';
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
  constructor(private userStoreService: UserStoreService ,
              // private servicefalseService: ServicefalseService,
              private navigateService: NavigateService) { }

  ngOnInit() {
  }

  confirm(status) {
    if (status) {
      this.logout();
    }
    this.modal.isConfirmModalShow = false;
  }

  logout() {
     this.userStoreService.logout();
     // this.servicefalseService.getFalsePage().subscribe( res => {
     //   this.gohome(res.json());
     // })
  }

  gohome(ok) {
    console.log(ok);
    if (ok === true) {
      this.navigateService.clearRouteList();
      this.navigateService.pushToRoute('/homefalse');
    } else {
      this.navigateService.clearRouteList();
      this.navigateService.pushToRoute('/home') ;
    }
  }
}
