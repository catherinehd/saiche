import { Component, Output, EventEmitter, AfterViewInit, Input, OnChanges, HostBinding } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../service/user.service';
import { FadeInOutAnimation } from '../../../shared/animations/fade-in-out.animation';

@Component({
  selector: 'app-img-valid',
  templateUrl: './img-valid.component.html',
  styleUrls: ['./img-valid.component.styl'],
  animations: [FadeInOutAnimation]
})

export class ImgValidComponent implements AfterViewInit, OnChanges {
  @Input() mobile: string;
  @Input() type: string;
  @Output() onClose = new EventEmitter();
  @HostBinding('@fadeInOutAnimation') fadeInOutAnimation = true;
  imgSrc: string;
  imgCode = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{4}$/)
  ]);
  validatorMsg = {
    required: '请输入验证码',
    pattern: '验证码错误'
  };
  wrongMsg: string;

  constructor(private userService: UserService) {}

  ngAfterViewInit() {

  }

  ngOnChanges(changes) {
    if (changes.mobile && changes.mobile.currentValue) {
      this.getImgCode();
    }
  }

  changeImg() {
    this.getImgCode();
    this.imgCode.reset();
  }

  getImgCode() {
    this.imgSrc = this.userService.getImgCode(this.mobile);
  }

  close(type ?: number) {
    type ? this.onClose.emit(this.imgCode.value) : this.onClose.emit();
  }

  testImgCode() {
    if (!this.imgCode.valid) {
      for (const key in this.imgCode.errors) {
        this.wrongMsg = this.validatorMsg[key];
        return;
      }
    }
    return true;
  }


  submitImgCode() {
    if (!this.testImgCode()) return;
    this.userService.getMsgCode(this.mobile, this.imgCode.value, this.type).subscribe(res => {
      const response = res.json();
      response ? this.wrongMsg = response : this.close(1);
    });
  }
}
