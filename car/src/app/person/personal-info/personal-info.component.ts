import { Component, OnInit, HostBinding } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { DelayLeaveAnimation } from '../../shared/animations/delay-leave.animation';
import { UserService } from '../../service/user.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.styl'],
  animations: [ DelayLeaveAnimation ]
})
export class PersonalInfoComponent implements OnInit {
  name: string;
  msg: string;
  userId: number;
  username: string;
  nickName = new FormControl('', [
    Validators.required
  ]);
  @HostBinding('@delayLeaveAnimation') delayLeaveAnimation = true;
  @HostBinding('class.page') page = true;
  constructor(private navigateService: NavigateService,
              private userService: UserService) {
    this.userService.islogin().subscribe( res => {
      this.name = res.json().data.userNamenick;
    });
  }

  ngOnInit() {
  }

  clear() {
    this.nickName.reset();
  }

  onSave() {
    if (!this.nickName.valid) {
      this.showTip('请填写昵称');
      return;
    }
    if (this.nickName.value.length > 6) {
      this.showTip('昵称最多设置6个文字，请在范围内输入');
      return;
    }
    this.userService.islogin().subscribe( res => {
      if (res.json().msg = 'OK') {
        this.userId = res.json().data.userId;
        this.username = res.json().data.userName;
        this.userService.updateNickName(this.userId, this.username, this.nickName.value).subscribe(res2 => {
          const response = res2.json();
          if (response.ok) {
            this.showTip('修改昵称成功', () => {
              this.navigateService.popRoute();
            });
          }
        });
      }
    });

  }

  showTip(msg, callback ?: any) {
    this.msg = msg;
    setTimeout(() => {
      this.msg = '';
      if (callback) callback();
    }, 3000);
  }
}
