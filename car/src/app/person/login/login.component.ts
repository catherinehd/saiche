import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NavigateService } from '../../service/navigate.service';
import { UserService } from '../../service/user.service';
import { UserStoreService } from '../../service/user-store.service';
import { SlideUpAnimation } from '../../shared/animations/slide-up.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  animations: [SlideUpAnimation]
})
export class LoginComponent implements OnInit {
  msg: string;
  isLoading: boolean;
  isOpenEyesShow = true;
  loginForm: FormGroup;
  login: Login = new Login('', '');
  telControl: AbstractControl;
  isAgreementShow: boolean;
  validatorMsg = {
    tel: {
      required: '请填写手机号码',
      pattern: '请填写有效的手机号码'
    },
    pwd: {
      required: '请填写密码',
      pattern: '密码格式为6-15位字母及数字'
    }
  };

  @HostBinding('@slideUpAnimation') slideUpAnimation;
  @HostBinding('class.loginPage') loginPage = true;

  constructor(private formBuilder: FormBuilder,
              private navigateService: NavigateService,
              private userService: UserService,
              // private serviceFalseService: ServicefalseService,
              private userStoreService: UserStoreService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      'tel': [this.login.tel, [
        Validators.required,
        Validators.pattern(/^1(3|4|5|7|8)\d\s\d{4}\s\d{4}$/)
      ]],
      'pwd': [this.login.pwd, [
        Validators.required,
        Validators.pattern(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$/)
      ]]
    });
    this.telControl = this.loginForm.get('tel');
  }

  clear(type) {
    this.loginForm.patchValue({[type]: ''});
  }

  pushToForgetPwd() {
    this.navigateService.push();
    this.navigateService.pushToRoute('/reset/tel-valid')
  }

  testValid() {
    for (const field in this.login) {
      const control = this.loginForm.get(field);
      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.showTip(this.validatorMsg[field][key]);
          return;
        }
      }
    }
  }

  testIfRegisted() {
    if (this.telControl.valid) {
      this.userService.testHasRegister(this.getTelValue()).subscribe(res => {
        const response = res.json();
        if (!response) {
          this.showTip('该手机号码未注册');
        }
      });
    }
  }

  getTelValue() {
    const telArr = this.telControl.value.split(' ');
    return `${telArr[0]}${telArr[1]}${telArr[2]}`;
  }

  onSubmit() {
    this.testValid();
    if (!this.loginForm.valid) return;
    this.isLoading = true;
    const tel = this.getTelValue();
    this.userService.login(tel, this.loginForm.value.pwd).subscribe(res => {
      res.json() === null ? this.showTip('手机号码或密码错误') : this.loginSuccess(res.json());
    });
  }

  loginSuccess(user) {
    this.showTip('登录成功');
    // setTimeout(() => {
    //   this.userStoreService.storeUser(user);
    //   this.serviceFalseService.getFalsePage().subscribe( res => {
    //     this.gofalsepage(res);
    //   });
    // }, 2000);
  }

  gofalsepage(res) {
    // if (res.json() === true) {
    //   this.navigateService.falsePushToNextRoute();
    // } else {
    //   this.navigateService.pushToNextRoute();
    // }
    this.navigateService.pushToNextRoute();
  }

  showTip(msg) {
    this.isLoading = false;
    this.msg = msg;
    setTimeout(() => this.msg = '', 2000);
  }
}

class Login {
  constructor(public tel: string,
              public pwd: string ) {}
}
