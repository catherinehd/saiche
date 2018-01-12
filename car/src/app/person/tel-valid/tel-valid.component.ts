import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { ServiceInfo } from '../../config/config';
import { UserStoreService } from '../../service/user-store.service';

@Component({
  selector: 'app-tel-valid',
  templateUrl: './tel-valid.component.html',
  styleUrls: ['../login/login.component.styl', './tel-valid.component.styl']
})
export class TelValidComponent implements OnInit {
  title: string;
  msg: string;
  isImgValidShow: boolean;
  imgCode: string;
  telValidForm: FormGroup;
  telValid: TelValid = new TelValid('', '', '', '');
  telControl: AbstractControl;
  isCounting: boolean;
  count: number;
  isAgreementShow: boolean;
  tel: string;
  inlogin = false;  // 是否在注册进行状态，当第一次点击注册并没有完成注册时，为注册状态，true
  isEyesOpen = false;
  validatorMsg = {
    tel: {
      required: '请填写手机号码',
      pattern: '手机号格式不正确'
    },
    code: {
      required: '请填写手机验证码',
      pattern: '请填写正确的验证码'
    },
    pwd: {
      required: '请填写密码',
      pattern: '密码由6-15位数字字母组成'
    },
    invitenum: {
      required: '请填写邀请码',
    }
  };
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private userStoreService: UserStoreService,
              private navigateService: NavigateService,
              private userService: UserService) {
    this.tel = ServiceInfo.tel;
  }

  ngOnInit() {
    this.title = this.router.url.includes('register') ? '注册' : '找回密码';
    this.buildForm();
  }

  buildForm() {
    this.telValidForm = this.formBuilder.group({
      'tel': [this.telValid.tel, [
        Validators.required,
        Validators.pattern(/^1(3|4|5|7|8)\d\s\d{4}\s\d{4}$/)
      ]],
      'code': [this.telValid.code, [
        Validators.required,
        Validators.pattern(/^\d{6}$/)
      ]],
      'pwd': [this.telValid.pwd, [
        Validators.pattern(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/)
      ]],
      'invitenum': [this.telValid.invitenum, [
      ]]
    });
    this.telControl = this.telValidForm.get('tel');
  }

  clear(type) {
    this.telValidForm.patchValue({[type]: ''});
  }

  testTel() {
    if (this.telControl.dirty && !this.telControl.valid) {
      for (const key in this.telControl.errors) {
        this.showTip(this.validatorMsg.tel[key]);
        return;
      }
    }
    const telArr = this.telControl.value.split(' ');
    this.telValid.tel = `${telArr[0]}${telArr[1]}${telArr[2]}`;
  }

  getCode() {
    this.testTel();
    if (!this.telControl.valid) return;
    if (this.title !== '注册') {
      this.userService.testHasRegister(this.telValid.tel).subscribe( res => {
        const response1 = res.json();
        response1.ok ? this.getMsgCode() : this.showTip(response1.msg);
      });
    } else {
      this.userService.testPhonenumber(this.telValid.tel).subscribe( res => {
        const response2 = res.json();
        response2.ok ? this.getMsgCode() : this.showTip(response2.msg);
      });
    }
  }

  // 获取短信验证码
  getMsgCode() {
    this.userService.getMsgCode(this.telValid.tel).subscribe( res => {
      if (res.json().ok) {
        this.showTip('短信验证码发送成功');
        this.counting();
      } else {
        this.showTip(res.json().msg);
      }
    });
  }

  closeImgValid(code) {
    this.isImgValidShow = false;
    if (!code) return;
    this.imgCode = code;
    this.showTip('短信验证码发送成功');
    this.counting();
  }

  counting() {
    this.isCounting = true;
    this.count = 60;
    const timer = setInterval(() => {
      this.count --;
      if (this.count <= 0) {
        clearInterval(timer);
        this.isCounting = false;
      }
    }, 1000);
  }

  testValid() {
    for (const field in this.telValid) {
      const control = this.telValidForm.get(field);
      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.showTip(this.validatorMsg[field][key]);
          return;
        }
      }
    }
  }

  // 注册
  onSubmit() {
    if (!this.telValidForm.value.tel || !this.telValidForm.value.code || !this.telValidForm.value.pwd) return;
    this.testValid();
    if (!this.telValidForm.valid) return;
    this.inlogin = true;
    // 验证邀请码
    if ( this.telValidForm.value.invitenum ) {
      this.userService.testInvitCode(this.telValidForm.value.valueinvitenum).subscribe( res => {
        if (res.json().ok) {
          this.userService.testMsgCode(this.telValid.tel, this.telValidForm.value.code).subscribe(res2 => {
            res2.json().ok ? this.goRegister() : this.showTip(res2.json().msg);
          });
        } else {
          this.showTip(res.json().msg);
          return;
        }
      });
    } else {
      this.userService.testMsgCode(this.telValidForm.value.tel.replace(/\s/g, ''), this.telValidForm.value.code).subscribe(res => {
        res.json().ok ? this.goRegister() : this.showTip(res.json().msg);
      });
    }
  }

  // 重设密码
  onSubmit2() {
    if (!this.telValidForm.value.tel || !this.telValidForm.value.code) return;
    this.testValid();
    if (!this.telValidForm.valid) return;
    this.userService.testMsgCode(this.telValid.tel, this.telValidForm.value.code).subscribe(res => {
      res.json() ? this.goNextStep() : this.showTip('验证码错误');
    });
  }

  // 验证完成后注册
  goRegister() {
    this.userService.register(this.telValidForm.value.tel.replace(/\s/g, ''), this.telValidForm.value.pwd).subscribe( res => {
      if (res.json().ok) {
        this.goNextStep();
      } else {
        this.showTip( res.json().msg);
        this.inlogin = false;
      }
    });
  }

  goNextStep() {
    this.navigateService.push();
    if (this.title === '注册') {
      this.userService.login(this.telValidForm.value.tel.replace(/\s/g, ''), this.telValidForm.value.pwd).subscribe( res => {
        setTimeout(() => {
          this.userStoreService.storeUser(this.telValidForm.value.tel.replace(/\s/g, ''));
          this.navigateService.pushToRoute('./home');
        }, 2000);
      });
    } else {
      this.navigateService.pushToRoute('./reset/setting-pwd', {tel: this.telValid.tel, msgCode: this.telValidForm.value.code});
    }
  }

  showTip(msg) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 3000);
  }

  goPage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }
}

class TelValid {
  constructor(public tel: string,
              public code: string,
              public pwd: string,
              public invitenum: string) {}
}
