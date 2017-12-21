import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiList } from '../config/apiList';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}
  // 登录
  login(mobile, loginPwd) {
    return this.httpService.getMethod({
      url: 'User/Login',
      data: {
        mobile: mobile,
        login_pwd: loginPwd
      }
    });
  }

  // 注册
  register(mobile, msgCode, loginPwd) {
    return this.httpService.putMethod({
      url: 'User/Register',
      data: {
        mobile: mobile,
        nick_name: msgCode,
        login_pwd: loginPwd
      }
    });
  }

  // 修改昵称
  updateNickName(nickName) {
    return this.httpService.putMethod({
      url: 'User/UpdateNickName',
      data: {
        nick_name: nickName
      }
    });
  }

  // 忘记密码
  updatePwd(mobile, nickName, loginPwd) {
    return this.httpService.putMethod({
      url: 'User/UpdatePwdMobile',
      data: {
        mobile: mobile,
        nick_name: nickName,
        login_pwd: loginPwd
      }
    });
  }

  // 验证手机号是否已经注册
  testHasRegister(mobile) {
    return this.httpService.getMethod({
      url: 'User/IsReg',
      data: {
        mobile: mobile
      }
    });
  }

  // 验证短信验证码
  testMsgCode(mobile, msgCode) {
    return this.httpService.getMethod({
      url: 'ValidationCode/ValidMobile',
      data: {
        uuid: mobile,
        code: msgCode
      }
    });
  }

  // 获取图片验证码
  getImgCode(mobile) {
    const rd = new Date().getTime();
    return `${new ApiList().getUrl()}ValidationCode/SendImg?uuid=${mobile}&rd=${rd}`;
  }

  // 验证图片验证码, 发送短信验证码
  getMsgCode(mobile, imgCode, type: string) {     // type---Register || ForgetPwd
    return this.httpService.getMethod({
      url: 'ValidationCode/ValidCodeMobile',
      data: {
        mobile: mobile,
        code: imgCode,
        type: type
      }
    });
  }

}
