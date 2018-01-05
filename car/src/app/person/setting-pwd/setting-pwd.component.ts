import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { NavigateService } from '../../service/navigate.service';
import { UserStoreService } from '../../service/user-store.service';
import { ServiceInfo } from '../../config/config';
import { DeviceService } from '../../service/device.service';
import { SlideToRightAnimation } from '../../shared/animations/slide-to-right.animation';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './setting-pwd.component.html',
  styleUrls: ['../login/login.component.styl', './setting-pwd.component.styl'],
  animations: [ SlideToRightAnimation ]
})
export class SettingPwdComponent implements OnInit {
  type: number;    // 1--注册， 2--忘记密码
  isLoading: boolean;
  tel: string;
  pwdSettingForm: FormGroup;
  pwdSetting: PwdSetting = new PwdSetting('', '');
  msg: string;
  isAgreementShow: boolean;
  isOpenEyesShow = false;
  isOpenEyesShowAgain = false;
  validatorMsg = {
    pwd: {
      required: '请填写密码',
      pattern: '密码由6-15位字母及数字组成'
    },
    pwdAgain: {
      required: '请再次填写密码',
      same: '两次密码输入不一致'
    }
  };
  @HostBinding('@slideToRightAnimation') slideToRightAnimation = true;
  @HostBinding('class.page') page = true;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private navigateService: NavigateService,
              private deviceService: DeviceService,
              private userStoreService: UserStoreService) {
    this.tel = ServiceInfo.tel;
  }

  ngOnInit() {
    this.type = this.router.url.includes('register') ? 1 : 2;
    this.buildForm();
  }

  buildForm() {
    this.pwdSettingForm = this.formBuilder.group({
      'pwd' : [this.pwdSetting.pwd, [
        Validators.required,
        Validators.pattern(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/)
      ]],
      'pwdAgain' : [this.pwdSetting.pwdAgain, [
        Validators.required
      ]]
    });
  }

  clear(type) {
    this.pwdSettingForm.patchValue({[type]: ''});
  }

  testValid() {
    if (!this.pwdSettingForm.value.pwd || !this.pwdSettingForm.value.pwdAgain) return;
    for (const field in this.pwdSetting) {
      const control = this.pwdSettingForm.get(field);
      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.showTip(this.validatorMsg[field][key]);
          return;
        }
      }
    }
    if (this.pwdSettingForm.value.pwd !== this.pwdSettingForm.value.pwdAgain) {
      this.showTip(this.validatorMsg.pwdAgain.same);
      return;
    }
    return true;
  }


  onSubmit() {
    if (!this.testValid()) return;
    this.isLoading = true;
    const params = this.activatedRoute.snapshot.params;
    this.type === 1 ? this.register(params.tel, params.msgCode) : this.resPwd(params.tel, params.msgCode);
  }

  register(tel, msgCode) {
    // this.userService.register(tel, msgCode, this.pwdSettingForm.value.pwd).subscribe(res => {
    //   const response = res.json();
    //   if (response.id < 0) {
    //     this.showTip(response.nick_name);
    //     if (response.nick_name === '验证码错误') setTimeout(() => this.navigateService.popRoute(), 3000);
    //   } else {
    //     this.showTip('注册成功', () => {
    //       this.userStoreService.storeUser(response);
    //       this.navigateService.clearRouteList();
    //       this.navigateService.pushToRoute('/');
    //     });
    //   }
    // });
  }

  // 重置密码
  resPwd(tel, msgCode) {
    this.userService.updatePwd(tel, this.pwdSettingForm.value.pwd).subscribe(res => {
      const response = res.json();
      if (!response.ok) {
        this.showTip(response.msg);
      } else {
        this.showTip('重置密码成功', () => {this.navigateService.pushToRoute('/login')});
      }
    });
  }

  showTip(msg, callback ?: any) {
    this.isLoading = false;
    this.msg = msg;
    setTimeout(() => {
      this.msg = '';
      if (callback) callback();
    }, 3000);
  }

}

class PwdSetting {
  constructor(public pwd: string,
              public pwdAgain: string ) {}
}
