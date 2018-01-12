import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { SetService } from '../../service/set.service';

@Component({
  selector: 'app-settype',
  templateUrl: './settype.component.html',
  styleUrls: ['./settype.component.styl']
})
export class SettypeComponent implements OnInit {

  modal: object;
  confirmshow = false;
  getset: object;
  seturl: string;
  tips: any[];
  setList: any;
  userId: number;
  userName: string;
  setnumber: number;
  hasmsgnum: number; // 剩余短信条数
  msg: string; // 提示

  constructor(private navigateService: NavigateService,
              private userService: UserService,
              private setService: SetService,
              private activatedService: ActivatedRoute) {
    this.getset = {
      today: true,
      week: false,
      month: false,
      history: true,
      setnum: 10
    };
    this.tips = [
      [
        ['当天遗漏时提醒', '当天遗漏时提醒是指1-10名车号为大或为小遗漏值接近昨日最大遗漏值时，系统将发送短信提醒用户。'],
        ['本周遗漏时提醒', '本周遗漏时提醒是指1-10名车号为大或为小遗漏值接近上周最大遗漏值时，系统将发送短信提醒用户。'],
        ['本月遗漏时提醒', '本月遗漏时提醒是指1-10名车号为大或为小遗漏值接近上月最大遗漏值时，系统将发送短信提醒用户。'],
        ['历史遗漏时提醒', '历史遗漏时提醒是指1-10名车号为大或为小遗漏值接近历史最大遗漏值时，系统将发送短信提醒用户。'],
        ['遗漏值达到设置值提醒', '遗漏值达到设置值提醒是指1-10名车号为大或为小遗漏值接近设置的期数时，系统将发送短信提醒用户。']
    ],
      [
        ['当天遗漏时提醒', '当天遗漏时提醒是指1-10名车号为单或为双遗漏值接近昨日最大遗漏值时，系统将发送短信提醒用户。'],
        ['本周遗漏时提醒', '本周遗漏时提醒是指1-10名车号为单或为双遗漏值接近上周最大遗漏值时，系统将发送短信提醒用户。'],
        ['本月遗漏时提醒', '本月遗漏时提醒是指1-10名车号为单或为双遗漏值接近上月最大遗漏值时，系统将发送短信提醒用户。'],
        ['历史遗漏时提醒', '历史遗漏时提醒是指1-10名车号为单或为双遗漏值接近历史最大遗漏值时，系统将发送短信提醒用户。'],
        ['遗漏值达到设置值提醒', '遗漏值达到设置值提醒是指1-10名车号为单或为双遗漏值达到设置的期数时，系统将发送短信提醒用户。']
      ],
      [
        ['当天遗漏时提醒', '当天遗漏时提醒是冠亚和值遗漏值接近昨日最大遗漏值时，系统将发送短信提醒用户。'],
        ['本周遗漏时提醒', '本周遗漏时提醒是冠亚和值遗漏值接近上周最大遗漏值时，系统将发送短信提醒用户。'],
        ['本月遗漏时提醒', '本月遗漏时提醒是指冠亚和值遗漏值接近上月最大遗漏值时，系统将发送短信提醒用户。'],
        ['历史遗漏时提醒', '历史遗漏时提醒是指冠亚和值遗漏值接近历史最大遗漏值时，系统将发送短信提醒用户。'],
        ['遗漏值达到设置值提醒', '遗漏值达到设置值提醒是冠亚和值遗漏值达到设置的期数时，系统将发送短信提醒用户。']
      ],
      [
        ['当天遗漏时提醒', '当天遗漏时提醒是指1-5名车号为龙或为虎遗漏值接近昨日最大遗漏值时，系统将发送短信提醒用户。'],
        ['本周遗漏时提醒', '本周遗漏时提醒是指1-5名车号为龙或为虎遗漏值接近上周最大遗漏值时，系统将发送短信提醒用户。'],
        ['本月遗漏时提醒', '本月遗漏时提醒是指1-5名车号为龙或为虎遗漏值接近上月最大遗漏值时，系统将发送短信提醒用户。'],
        ['历史遗漏时提醒', '历史遗漏时提醒是指1-5名车号为龙或为虎遗漏值接近历史最大遗漏值时，系统将发送短信提醒用户。'],
        ['遗漏值达到设置值提醒', '遗漏值达到设置值提醒是指1-5名车号为龙或为虎遗漏值达到设置的期数时，系统将发送短信提醒用户。']
      ]];
  }

  ngOnInit() {
    this.activatedService.url.subscribe((res) => {
      if (res[1].path.indexOf('bigsmall') >= 0) {
        this.seturl = 'bigsmall';
      } else if (res[1].path.indexOf('singledouble') >= 0) {
        this.seturl = 'singledouble';
      }  else if (res[1].path.indexOf('onetwo') >= 0) {
        this.seturl = 'onetwo';
      }  else {
        this.seturl = 'dragontiger';
      }
    });
    // 获取默认设置的值
    this.userService.islogin().subscribe( res => {
      this.setTurn(res.json().data);
      this.userId = res.json().data.userId;
      this.hasmsgnum = res.json().data.userQuota;
      // 当免费额度为0时，开关均为关，并提示无法进行提醒。
      if (this.hasmsgnum === 0) {
        this.nofree();
      } else {
        this.hasfreemsg();
      }
      this.userName = res.json().data.userName;
      if (this.seturl === 'bigsmall') { this.setnumber = res.json().data.sizeCustom; }
      if (this.seturl === 'singledouble') { this.setnumber = res.json().data.singleCustom; }
      if (this.seturl === 'onetwo') { this.setnumber = res.json().data.andCustom; }
      if (this.seturl === 'dragontiger') { this.setnumber = res.json().data.loongCustom; }
    });
  }

  onConfirm(stage) {
    this.confirmshow = false;
  }

  // 免费提醒为0时的设置
  nofree() {
    const btnArray = document.getElementsByClassName('check-btn');
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].className = 'check-btn';
      btnArray[i].addEventListener('click', () => {
        this.showMsg('当前免费短信额度已使用完，无法进行消息提醒。');
      });
    }
  }

  showMsg(msg) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 2000);
  }

  // 有免费提醒额度
  hasfreemsg() {
    // 获取提醒设置的值
    const btnArray = document.getElementsByClassName('check-btn');
    // this.getset.today ? btnArray[0].className = 'check-btn turnOn' : btnArray[0].className = 'check-btn';
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].addEventListener('click', () => {
        if (btnArray[i].className.indexOf('turnOn') > 0) {
          btnArray[i].className = 'check-btn';
          btnArray[i].querySelector('div').style.left = '0';
          // 向后台传递关闭提醒的值
          this.saveSet(i);
        } else {
          btnArray[i].className = 'check-btn turnOn';
          btnArray[i].querySelector('div').style.left = 'auto';
          // 向后台传递打开提醒的值
          this.saveSet(i);
        }
      });
    }
  }

  // 保存设置
  saveSet(n) {
    const btnArray = document.getElementsByClassName('check-btn');
    let type = 0;
    if (btnArray[n].className === 'check-btn turnOn') { type = 1; } else { type = 0; }
    if (n === 0 ) {
      switch (this.seturl) {
        case 'bigsmall':
          this.setService.setSizeSameday(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'singledouble':
          this.setService.setSingleSameday(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'onetwo':
          this.setService.setAndSameday(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'dragontiger':
          this.setService.setLoongSameday(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        default:
          break;
      }
    } else if (n === 1) {
      switch (this.seturl) {
        case 'bigsmall':
          this.setService.setSizeThisweek(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'singledouble':
          this.setService.setSingleThisweek(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'onetwo':
          this.setService.setAndThisweek(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'dragontiger':
          this.setService.setLoongThisweek(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        default:
          break;
      }
    } else if ( n === 2) {
      switch (this.seturl) {
        case 'bigsmall':
          this.setService.setSizeThismonth(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'singledouble':
          this.setService.setSingleThismonth(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'onetwo':
          this.setService.setAndThismonth(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'dragontiger':
          this.setService.setLoongThismonth(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        default:
          break;
      }
    } else if (n === 3) {
      switch (this.seturl) {
        case 'bigsmall':
          this.setService.setSizeHistory(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'singledouble':
          this.setService.setSingleHistory(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'onetwo':
          this.setService.setAndHistory(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        case 'dragontiger':
          this.setService.setLoongHistory(this.userId, this.userName, type).subscribe( res => {
          });
          break;
        default:
          break;
      }
    }
  }

  // 设置提醒按钮
  setTurn(data) {
    const btnArray = document.getElementsByClassName('check-btn');
    switch (this.seturl) {
      case 'bigsmall':
        if (data.sizeSameday === 1) {
          btnArray[0].className = 'check-btn turnOn';
        } else {
          btnArray[0].className = 'check-btn';
        }
        if (data.sizeThisweek === 1) {
          btnArray[1].className = 'check-btn turnOn';
        } else {
          btnArray[1].className = 'check-btn';
        }
        if (data.sizeThismonth === 1) {
          btnArray[2].className = 'check-btn turnOn';
        } else {
          btnArray[2].className = 'check-btn';
        }
        if (data.sizeHistory === 1) {
          btnArray[3].className = 'check-btn turnOn';
        } else {
          btnArray[3].className = 'check-btn';
        }
        break;
      case 'singledouble':
        if (data.singleSameday === 1) {
          btnArray[0].className = 'check-btn turnOn';
        } else {
          btnArray[0].className = 'check-btn';
        }
        if (data.singleThisweek === 1) {
          btnArray[1].className = 'check-btn turnOn';
        } else {
          btnArray[1].className = 'check-btn';
        }
        if (data.singleThismonth === 1) {
          btnArray[2].className = 'check-btn turnOn';
        } else {
          btnArray[2].className = 'check-btn';
        }
        if (data.singleHistory === 1) {
          btnArray[3].className = 'check-btn turnOn';
        } else {
          btnArray[3].className = 'check-btn';
        }
        break;
      case 'onetwo':
        if (data.andSameday === 1) {
          btnArray[0].className = 'check-btn turnOn';
        } else {
          btnArray[0].className = 'check-btn';
        }
        if (data.andThisweek === 1) {
          btnArray[1].className = 'check-btn turnOn';
        } else {
          btnArray[1].className = 'check-btn';
        }
        if (data.andThismonth === 1) {
          btnArray[2].className = 'check-btn turnOn';
        } else {
          btnArray[2].className = 'check-btn';
        }
        if (data.andHistory === 1) {
          btnArray[3].className = 'check-btn turnOn';
        } else {
          btnArray[3].className = 'check-btn';
        }
        break;
      case 'dragontiger':
        if (data.loongSameday === 1) {
          btnArray[0].className = 'check-btn turnOn';
        } else {
          btnArray[0].className = 'check-btn';
        }
        if (data.loongThisweek === 1) {
          btnArray[1].className = 'check-btn turnOn';
        } else {
          btnArray[1].className = 'check-btn';
        }
        if (data.loongThismonth === 1) {
          btnArray[2].className = 'check-btn turnOn';
        } else {
          btnArray[2].className = 'check-btn';
        }
        if (data.loongHistory === 1) {
          btnArray[3].className = 'check-btn turnOn';
        } else {
          btnArray[3].className = 'check-btn';
        }
        break;
      default:
        break;
    }
  }

  // 设置提示消息
  showtip(type) {
    this.confirmshow = true;
    switch (type) {
      case 'today':
        switch (this.seturl) {
          case 'bigsmall':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[0][0][0],
              confirmMsg: this.tips[0][0][1]
            };
            break;
          case 'singledouble':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[1][0][0],
              confirmMsg: this.tips[1][0][1]
            };
            break;
          case 'onetwo':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[2][0][0],
              confirmMsg: this.tips[2][0][1]
            };
            break;
          case 'dragontiger':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[3][0][0],
              confirmMsg: this.tips[3][0][1]
            };
            break;
          default:
            break;
        }
        break;
      case 'week':
        switch (this.seturl) {
          case 'bigsmall':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[0][1][0],
              confirmMsg: this.tips[0][1][1]
            };
            break;
          case 'singledouble':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[1][1][0],
              confirmMsg: this.tips[1][1][1]
            };
            break;
          case 'onetwo':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[2][1][0],
              confirmMsg: this.tips[2][1][1]
            };
            break;
          case 'dragontiger':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[3][1][0],
              confirmMsg: this.tips[3][1][1]
            };
            break;
          default:
            break;
        }
        break;
      case 'month':
        switch (this.seturl) {
          case 'bigsmall':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[0][2][0],
              confirmMsg: this.tips[0][2][1]
            };
            break;
          case 'singledouble':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[1][2][0],
              confirmMsg: this.tips[1][2][1]
            };
            break;
          case 'onetwo':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[2][2][0],
              confirmMsg: this.tips[2][2][1]
            };
            break;
          case 'dragontiger':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[3][2][0],
              confirmMsg: this.tips[3][2][1]
            };
            break;
          default:
            break;
        }
        break;
      case 'history':
        switch (this.seturl) {
          case 'bigsmall':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[0][3][0],
              confirmMsg: this.tips[0][3][1]
            };
            break;
          case 'singledouble':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[1][3][0],
              confirmMsg: this.tips[1][3][1]
            };
            break;
          case 'onetwo':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[2][3][0],
              confirmMsg: this.tips[2][3][1]
            };
            break;
          case 'dragontiger':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[3][3][0],
              confirmMsg: this.tips[3][3][1]
            };
            break;
          default:
            break;
        }
        break;
      case 'setnum':
        switch (this.seturl) {
          case 'bigsmall':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[0][4][0],
              confirmMsg: this.tips[0][4][1]
            };
            break;
          case 'singledouble':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[1][4][0],
              confirmMsg: this.tips[1][4][1]
            };
            break;
          case 'onetwo':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[2][4][0],
              confirmMsg: this.tips[2][4][1]
            };
            break;
          case 'dragontiger':
            this.modal = {
              isConfirmModalShow: true,
              conrirmTit: this.tips[3][4][0],
              confirmMsg: this.tips[3][4][1]
            };
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }

  goPage(url, seturl) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url, seturl);
  }

}
