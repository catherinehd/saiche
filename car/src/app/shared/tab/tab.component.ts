import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.styl']
})
export class TabComponent implements OnInit {
  homeurl: string;
  @Output() godefault = new EventEmitter();
  // @Input() hasnews: boolean;
  hasnews: boolean;
  confirmshow: boolean;
  modal: object;

  constructor(private navigateService: NavigateService,
              private userService: UserService) {
    this.homeurl = 'home';
    this.modal = {
      isConfirmModalShow: true,
      confirmMsg: '提醒设置模块需登录才能使用，是否前去登录'
    };
  }

  ngOnInit() {
    this.hasnews = true;
  }

  godefaultstar() {
    this.godefault.emit();
  }

  goSetnews() {
    this.userService.islogin().subscribe( res => {
      if (res.json().ok) {
        this.navigateService.push();
        this.navigateService.pushToRoute('set');
      } else {
        this.confirmshow = true;
      }
    });
  }

  onConfirm(e) {
    if (e === 1) {
      this.navigateService.push();
      this.navigateService.pushToRoute('./login');
    } else {
      this.confirmshow = false;
    }
  }

}
