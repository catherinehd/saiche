import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';


@Component({
  selector: 'app-settype',
  templateUrl: './settype.component.html',
  styleUrls: ['./settype.component.styl']
})
export class SettypeComponent implements OnInit {

  modal: object;
  confirmshow = false;
  getset: object;

  constructor(private navigateService: NavigateService) {
    this.getset = {
      today: true,
      week: false,
      month: false,
      history: true,
      setnum: 10
    };
  }

  ngOnInit() {
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

  switch() {
  }

  onConfirm(stage) {
    this.confirmshow = false;
  }

  showtip(type) {
    this.confirmshow = true;
    switch (type) {
      case 'today':
        this.modal = {
          isConfirmModalShow: true,
          conrirmTit: '当天遗漏时提醒',
          confirmMsg: '当天遗漏时提醒是指1-10名车号为大或为小遗漏值接近昨日最大遗漏值时，系统将发送短信提醒用户。'
        };
        break;
      case 'week':
        this.modal = {
          isConfirmModalShow: true,
          conrirmTit: '本周遗漏时提醒',
          confirmMsg: '本周遗漏时提醒是指1-10名车号为大或为小遗漏值接近昨日最大遗漏值时，系统将发送短信提醒用户。'
        };
        break;
      case 'month':
        this.modal = {
          isConfirmModalShow: true,
          conrirmTit: '本月遗漏时提醒',
          confirmMsg: '本月遗漏时提醒是指1-10名车号为大或为小遗漏值接近昨日最大遗漏值时，系统将发送短信提醒用户。'
        };
        break;
      case 'history':
        this.modal = {
          isConfirmModalShow: true,
          conrirmTit: '历史遗漏时提醒',
          confirmMsg: '历史遗漏时提醒是指1-10名车号为大或为小遗漏值接近昨日最大遗漏值时，系统将发送短信提醒用户。'
        };
        break;
      case 'setnum':
        this.modal = {
          isConfirmModalShow: true,
          conrirmTit: '遗漏值达到设置值提醒',
          confirmMsg: '遗漏值达到设置值提醒是指1-10名车号为大或为小遗漏值接近设置的期数时，系统将发送短信提醒用户。'
        };
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
