import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ApiList } from '../config/apiList';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}
  // 登录
  login(username, pwd) {
    return this.httpService.getMethod({
      url: 'web/user/doLogin',
      data: {
        userName: username,
        password: pwd
      }
    });
  }

  // 判断用户是否登录
  islogin() {
    return this.httpService.getMethod({
      url: 'web/user/center',
    });
  }

  // 注册
  register(mobile, loginPwd) {
    return this.httpService.postMethod({
      url: 'web/user/doRegister',
      data: {
        userName: mobile,
        password: loginPwd
      }
    });
  }

  // 修改昵称
  updateNickName(id, username, nickname) {
    return this.httpService.postMethod({
      url: 'web/user/updateUser',
      data: {
        userId: id,
        userName: username,
        userNamenick: nickname
    }
    });
  }

  // 忘记密码
  updatePwd(mobile, loginPwd) {
    return this.httpService.postMethod({
      url: 'web/user/updatePassword ',
      data: {
        username: mobile,
        np: loginPwd
      }
    });
  }

  // 验证手机号是否有效 注册
  testPhonenumber(username) {
    return this.httpService.getMethod({
      url: 'web/user/checkusername/' + username,
    });
  }

  // 验证手机号是否已经注册 忘记密码
  testHasRegister(username) {
    return this.httpService.getMethod({
      url: 'web/user/checkusernamepass/' + username,
    });
  }

  // 验证短信验证码
  testMsgCode(mobile, msgCode) {
    return this.httpService.getMethod({
      url: 'web/user/checkvalidReset/' + msgCode,
      data: {
        userName: mobile
      }
    });
  }

  // 发送短信验证码
  getMsgCode(mobile) {
    return this.httpService.postMethod({
      url: 'web/user/valid',
      data: {
        userName: mobile
      }
    });
  }

  // 验证邀请码
  testInvitCode(code) {
    return this.httpService.getMethod({
      url: 'web/user/checkcode/' + code,
    });
  }

  // 获取图片验证码
  getImgCode(mobile) {
    const rd = new Date().getTime();
    return `${new ApiList().getUrl()}ValidationCode/SendImg?uuid=${mobile}&rd=${rd}`;
  }

  // 验证图片验证码, 发送短信验证码
  // getMsgCode(mobile, imgCode, type: string) {     // type---Register || ForgetPwd
  //   return this.httpService.getMethod({
  //     url: 'ValidationCode/ValidCodeMobile',
  //     data: {
  //       mobile: mobile,
  //       code: imgCode,
  //       type: type
  //     }
  //   });
  // }

  // 登出
  logout() {
    return this.httpService.getMethod({
      url: 'web/user/logout'
    });
  }

}
