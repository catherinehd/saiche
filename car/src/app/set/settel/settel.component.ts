import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { SetService } from '../../service/set.service';
import { NavigateService} from '../../service/navigate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settel',
  templateUrl: './settel.component.html',
  styleUrls: ['./settel.component.styl']
})
export class SettelComponent implements OnInit {

  userId: number;
  userName: string;
  title: string;
  labelfor: string;
  telnumber: boolean;
  setnumber: boolean;
  oldnumber: number;
  oldsetnumber: number;
  msg: string;
  telform: FormGroup;
  telnum: Tel = new Tel('', '');
  telControl: AbstractControl;
  validatorMsg = {
    tel: {
      required: '请填写手机号码',
      pattern: '手机号格式错误'
    },
    num: {
      required: '请设置期数',
      pattern: '输入的数据不正确'
    },
  };
  save: boolean;
  localurl: string;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private setService: SetService,
              private activatedRoute: ActivatedRoute,
              private navigateService: NavigateService,
              private router: Router ) {
    this.save = false;
  }

  ngOnInit() {
    this.title = this.router.url.includes('tel') ? '修改手机号' : '自定义设置';
    this.labelfor = this.router.url.includes('tel') ? '手机号:' : '设置期数:';
    this.localurl = this.activatedRoute.snapshot.params.url;
    this.buildform();
    this.userService.islogin().subscribe( res => {
      this.oldnumber = res.json().data.userNumber;
      this.userId = res.json().data.userId;
      this.userName = res.json().data.userName;
      if (this.localurl === 'bigsmall') {
        this.oldsetnumber = res.json().data.sizeCustom;
      } else if (this.localurl === 'singledouble') {
        this.oldsetnumber = res.json().data.singleCustom;
      } else if (this.localurl === 'onetwo') {
        this.oldsetnumber = res.json().data.andCustom;
      } else {
        this.oldsetnumber = res.json().data.loongCustom;
      }
    });
  }

  buildform() {
    this.telform = this.formBuilder.group({
      'tel': [this.telnum.tel, [
        Validators.pattern(/^1(3|4|5|7|8)\d\s\d{4}\s\d{4}$/)
      ]],
      'num': [this.telnum.num, [
      ]]
    });
    this.telControl = this.telform.get('tel');
  }

  testphonenum() {
    if (this.telform.value.tel) {
      this.telnumber = true;
    } else {
      this.telnumber = false;
    }
  }

  testsetnum() {
    if (this.telform.value.num) {
      this.setnumber = true;
    } else {
      this.setnumber = false;
    }
  }

  testValid() {
    for (const field in this.telnum) {
      const control = this.telform.get(field);
      if (control && control.dirty && !control.valid) {
        for (const key in control.errors) {
          this.showTip(this.validatorMsg[field][key]);
          return;
        }
      }
    }
  }

  clear() {
    if (this.title === '修改手机号') {
      this.telform.patchValue({'tel': ''});
    } else {
      this.telform.patchValue({'num': ''});
    }
  }

  onSave() {
    this.testValid();
    if (!this.telform.valid) return;
    if (this.title === '修改手机号') {
      if (!this.telnumber) {this.showTip('请填写手机号码'); return; }
      this.setService.setTelnum(this.userId, this.userName, this.telform.value.tel).subscribe( res => {
        res.ok ? this.showSuccess() : this.save = false;
      });
    } else {
      if (!this.setnumber) {this.showTip('请设置期数'); return; }
      if (this.telform.value.num < 0) {this.showTip('输入的数据不正确'); return; }
      if (this.activatedRoute.snapshot.params.url === 'bigsmall') {
        this.setService.setSizeCustom(this.userId, this.userName, this.telform.value.num).subscribe( res => {
          res.ok ? this.showSuccess() : this.save = false;
        });
      } else if (this.activatedRoute.snapshot.params.url === 'singledouble') {
        this.setService.setSingleCustom(this.userId, this.userName, this.telform.value.num).subscribe( res => {
          res.ok ? this.showSuccess() : this.save = false;
        });
      } else if (this.activatedRoute.snapshot.params.url === 'onetwo') {
        this.setService.setAndCustom(this.userId, this.userName, this.telform.value.num).subscribe( res => {
          res.ok ? this.showSuccess() : this.save = false;
        });
      } else if (this.activatedRoute.snapshot.params.url === 'dragontiger') {
        this.setService.setLoongCustom(this.userId, this.userName, this.telform.value.num).subscribe( res => {
          res.ok ? this.showSuccess() : this.save = false;
        });
      }
    }
  }

  showSuccess() {
    this.save = true;
    setTimeout(() => { this.save = false; this.navigateService.popRoute(); }, 2000);
  }

  showTip(msg) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 2000);
  }

}

class Tel {
  constructor(
    public tel: string,
    public num: string
  ) {}
}
