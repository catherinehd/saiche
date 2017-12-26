import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-settel',
  templateUrl: './settel.component.html',
  styleUrls: ['./settel.component.styl']
})
export class SettelComponent implements OnInit {

  title: string;
  labelfor: string;
  telnumber: boolean;
  setnumber: boolean;
  oldnumber: number;
  msg: string;
  telform: FormGroup;
  telnum: Tel = new Tel('', 0);
  telControl: AbstractControl;
  validatorMsg = {
    tel: {
      required: '请填写手机号码',
      pattern: '请填写有效的手机号码'
    },
    num: {
      required: '请设置期数',
      pattern: '输入的数据不正确'
    },
  };

  constructor(private formBuilder: FormBuilder,
              private router: Router ) { }

  ngOnInit() {
    this.title = this.router.url.includes('tel') ? '修改手机号' : '自定义设置';
    this.labelfor = this.router.url.includes('tel') ? '手机号' : '设置期数';
    this.buildform();
    this.oldnumber = 12345678912;
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

  clear() {
    this.telform.patchValue({'tel': ''});
  }

  onSave() {
    // 保存手机号
  }

}

class Tel {
  constructor(
    public tel: string,
    public num: number
  ) {}
}
