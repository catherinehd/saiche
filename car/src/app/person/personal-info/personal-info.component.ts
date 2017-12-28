import { Component, OnInit, HostBinding } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { DelayLeaveAnimation } from '../../shared/animations/delay-leave.animation';
import {UserService} from '../../service/user.service';
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
    this.userService.updateNickName(this.nickName.value).subscribe(res => {
      const response = res.json();
      console.log(response);
      if (response.ok) {
        this.showTip('修改成功');
      }
    });
  }

  showTip(msg) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 3000);
  }
}
