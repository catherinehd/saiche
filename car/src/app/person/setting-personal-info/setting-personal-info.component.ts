import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { UserStoreService } from '../../service/user-store.service';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { SlideToRightAnimation } from '../../shared/animations/slide-to-right.animation';


@Component({
  selector: 'app-setting-personal-info',
  templateUrl: './setting-personal-info.component.html',
  styleUrls: ['./setting-personal-info.component.styl'],
  animations: [ SlideToRightAnimation ]
})
export class SettingPersonalInfoComponent implements OnInit {
  name: string;
  msg: string;
  nickName = new FormControl('', [
    Validators.required
  ]);
  @HostBinding('@slideToRightAnimation') slideToRightAnimation = true;
  @HostBinding('class.page') page = true;
  constructor(private userStoreService: UserStoreService,
              private navigateService: NavigateService,
              private userService: UserService) {}

  ngOnInit() {
    const user = this.userStoreService.getUser();
    this.name = user ? user.nickName : '';
  }

  clear() {
    this.nickName.reset();
  }

  onSave() {
    if (!this.nickName.valid) {
      this.showTip('请填写昵称');
      return;
    }
    this.userService.updateNickName(this.nickName.value).subscribe(res => {
      const response = res.json();
      if (response) {
        this.showTip(response);
      }else {
        this.userStoreService.refreshUser(this.nickName.value);
        this.navigateService.popRoute();
      }
    });
  }

  showTip(msg) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 3000);
  }

}
