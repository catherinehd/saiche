import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { TrendService } from '../../service/trend.service';
import { NumberModel } from '../../model/number.model';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.styl']
})
export class NumberComponent implements OnInit, OnDestroy, OnChanges {

  numberList: any;
  dataList: any;
  latest: string;
  latesttime: string;
  timer: any;  // 计时器
  isCompleted: boolean;
  isLoading: boolean;
  page: number;  // 搜索的页数
  pagesize: number; // 每页的数量
  constructor(private trendService: TrendService) {
    this.page = 1;
    this.pagesize = 20;
    this.isCompleted = false;
    this.isLoading = false;
    this.numberList = [];
  }

  ngOnInit() {
    this.getNumber();
  }

  ngOnDestroy() {
    // 清除计时器
  }

  ngOnChanges() {}

  getNumber() {
    this.trendService.getNumberList(1).subscribe( (res) => {
      this.setNumberList(res.json());
      this.latest = res.json().bjpkExpect;
      this.latesttime = this.format(res.json().bjpkOpentime);
    });
  }

  refresh() {
    this.getNumber();
  }

  setNumberList(msg) {
    for (let i = 0; i < msg.rows.length; i++) {
      const t = msg.rows[i].bjpkOpentime;
      msg.rows[i].bjpkOpentime = this.format(t);   // 开奖时间
      const code = msg.rows[i].bjpkOpencode;
      msg.rows[i].bjpkOpencode = this.setCodeArr(code);  // 开奖号码
    }
    if (this.page === 1) {
      this.numberList = msg.rows;
    } else {
      this.numberList = this.numberList.concat(msg.rows);
    }
    this.isLoading = false;
  }

  // 时间戳格式化
  format(t) {
    const unixTimestamp = new Date(t);
    let commonTime = unixTimestamp.getMinutes() + ': ' + ' ' + unixTimestamp.getSeconds();
    if (unixTimestamp.getMinutes().toString().length === 1) {
       commonTime = '0' + unixTimestamp.getMinutes() + ': ' + ' ' + unixTimestamp.getSeconds();
    }
    return commonTime;
  }

  // 将code字符串转换成数组
  setCodeArr(code) {
    const codearray =  code.split(',');
    return codearray;
  }

  // 上拉加载
  canLoad() {
    this.isLoading = true;
    this.trendService.getNumberList( ++this.page ).subscribe( res => {
     if(res.json().rows.length < 20) {
       this.isCompleted = true;
     } else {
       this.isCompleted = false;
     }
     this.setNumberList(res.json());
    });
  }

}
