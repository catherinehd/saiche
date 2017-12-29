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
    if (this.page === 1) {
      this.numberList = msg.rows;
    } else {
      this.numberList.concat(msg.rows);
    }
    for (let i = 0; i < this.numberList.length; i++) {
      const t = this.numberList[i].bjpkOpentime;
      this.numberList[i].bjpkOpentime = this.format(t);   // 开奖时间
      const code = this.numberList[i].bjpkOpencode;
      this.numberList[i].bjpkOpencode = this.setCodeArr(code);  // 开奖号码
    }
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
    this.trendService.getNumberList( ++this.page ) .subscribe( res => {
      console.log(res.json());
      // if (res.json() && res.json().rows.length) {
      //   this.isLoading = false;
      //   this.setNumberList(res.json());
      //   if (res.json().rows.length < this.pagesize) {
      //     this.isCompleted = true;
      //   }
      // }
    });
  }

}
