import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private navigateService: NavigateService,
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
    // 获取提醒设置的值
    const btnArray = document.getElementsByClassName('check-btn');
    // this.getset.today ? btnArray[0].className = 'check-btn turnOn' : btnArray[0].className = 'check-btn';
    for (let i = 0; i < btnArray.length; i++) {
      btnArray[i].addEventListener('click', function(){
        if (btnArray[i].className.indexOf('turnOn') > 0) {
          btnArray[i].className = 'check-btn';
          btnArray[i].querySelector('div').style.left = '0';
          // 向后台传递关闭提醒的值
        } else {
          btnArray[i].className = 'check-btn turnOn';
          btnArray[i].querySelector('div').style.left = 'auto';
          // 向后台传递打开提醒的值
        }
      });
    }
  }

  onConfirm(stage) {
    this.confirmshow = false;
  }

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

  goPage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}
