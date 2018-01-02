import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TrendService } from '../../service/trend.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-bigsmall',
  templateUrl: './bigsmall.component.html',
  styleUrls: ['./bigsmall.component.styl']
})
export class BigsmallComponent implements OnInit, OnChanges{

  title: string;
  smalltitle1: string;
  smalltitle2: string;
  color: string;
  seturl: string;
  tableheight: number;
  points: any;
  nowId: number;
  activeArr: any;
  trendList: any[];
  detaillmsg: any;
  constructor(private router: Router,
              private trendService: TrendService,
              private activatedRoute: ActivatedRoute) {
    this.detaillmsg = {
      occur1: '',
      occur2: '',
      avemissing1: '',
      avemissing2: '',
      max1: '',
      max2: '',
      out1: '',
      out2: '',
    };
  }

  ngOnInit() {
    this.nowId = Number(this.activatedRoute.snapshot.params.id - 1);
    // 设置title
    if (this.router.url.includes('bigsmall')) {
      this.seturl = 'bigsmall';
      this.title = '大小走势';
      this.smalltitle1 = '小';
      this.smalltitle2 = '大';
    } else if (this.router.url.includes('singledouble')) {
      this.title = '单双走势';
      this.smalltitle1 = '单';
      this.smalltitle2 = '双';
      this.seturl = 'singledouble';
    } else if (this.router.url.includes('dragontiger')) {
      this.title = '1-5龙虎';
      this.smalltitle1 = '龙';
      this.smalltitle2 = '虎';
      this.seturl = 'dragontiger';
    }
    // 设置颜色
    const colorList = ['#c11e12', '#2c43a8', '#2c72a8', '#2ca89e', '#75a82c', '#a89b2c', '#a8632c', '#a8402c', '#a82c6c', '#982ca8'];
    this.activatedRoute.params.subscribe((params: any) => {
      this.color = colorList[params.id - 1];
    });
    this.getData(this.nowId);
  }

  ngOnChanges() {
  }

  getData(size) {
    // 获取数据
    if (this.title === '大小走势') {
      this.trendService.getBigsmallList(size).subscribe( res => {
        this.trendList = res.json().data.list;
        this.detaillmsg = {
          occur1: res.json().data.firstfrequency,
          occur2: res.json().data.secondfrequency,
          avemissing1: res.json().data.firstaverage,
          avemissing2: res.json().data.secondaverage,
          max1: res.json().data.firstmaximum,
          max2: res.json().data.secondmaximum,
          out1: res.json().data.firsteven,
          out2: res.json().data.secondeven,
        };
        setTimeout(() => {this.line(); this.tableheight = document.getElementsByClassName('number-container')[0]
          .getElementsByTagName('table')[1].clientHeight; }, 0);
      });
    } else if (this.title === '单双走势' ) {
      this.trendService.getSingledoubleList(size).subscribe( res => {
        this.trendList = res.json().data.list;
        this.detaillmsg = {
          occur1: res.json().data.firstfrequency,
          occur2: res.json().data.secondfrequency,
          avemissing1: res.json().data.firstaverage,
          avemissing2: res.json().data.secondaverage,
          max1: res.json().data.firstmaximum,
          max2: res.json().data.secondmaximum,
          out1: res.json().data.firsteven,
          out2: res.json().data.secondeven,
        };
        setTimeout(() => {this.line(); this.tableheight = document.getElementsByClassName('number-container')[0]
          .getElementsByTagName('table')[1].clientHeight; }, 0);
      });
    } else {
      this.trendService.getDragontigerList(size).subscribe( res => {
        this.trendList = res.json().data.list;
        this.detaillmsg = {
          occur1: res.json().data.firstfrequency,
          occur2: res.json().data.secondfrequency,
          avemissing1: res.json().data.firstaverage,
          avemissing2: res.json().data.secondaverage,
          max1: res.json().data.firstmaximum,
          max2: res.json().data.secondmaximum,
          out1: res.json().data.firsteven,
          out2: res.json().data.secondeven,
        };
        setTimeout(() => {this.line(); this.tableheight = document.getElementsByClassName('number-container')[0]
          .getElementsByTagName('table')[1].clientHeight; }, 0);
      });
    }
  }

  line() {
    // 连线
    this.activeArr = document.getElementsByClassName('number-container')[0].getElementsByTagName('table')[1]
      .getElementsByClassName('active');
    let x1 = 0;
    let y1 = 0;
    this.points = '';
    for (let i = 0 ; i < this.activeArr.length; i++) {
      x1 = this.activeArr[i].parentNode.offsetLeft + this.activeArr[i].offsetLeft + this.activeArr[i].clientWidth / 2;
      y1 = this.activeArr[i].parentNode.offsetTop + this.activeArr[i].offsetTop + this.activeArr[i].clientHeight / 2;
      this.points += x1 + ',' + y1 + ' ';
    }
  }
}
