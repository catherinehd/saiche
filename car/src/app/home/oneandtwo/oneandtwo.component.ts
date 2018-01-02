import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import { TrendService } from '../../service/trend.service';

@Component({
  selector: 'app-oneandtwo',
  templateUrl: './oneandtwo.component.html',
  styleUrls: ['./../bigsmall/bigsmall.component.styl', './oneandtwo.component.styl']
})
export class OneandtwoComponent implements OnInit {

  title: string;
  color: string;
  tableheight: number;
  points: any;
  activeArr: any;
  seturl: string;
  trendList: any[];
  constructor(private activatedRouter: ActivatedRoute,
              private trendService: TrendService,
              private userService: UserService) {
    this.seturl = 'onetwo';
  }

  ngOnInit() {
    this.color = '#379ade';
    this.getData();
  }

  getData() {
    this.trendService.getOnetwoList().subscribe( res => {
      this.trendList = res.json().rows;
      setTimeout(
        () => {
        this.tableheight = document.getElementsByClassName('number-container')[0]
        .getElementsByTagName('table')[0].clientHeight;
        this.setEven(res.json().rows);
        this.line();
        }, 0);
    });
  }

  setEven(list) {
    for (let i = 0 ; i < list.length; i++) {
      if (list[i].num % 2 !== 0) {
        document.getElementsByClassName('number-container')[0].getElementsByTagName('table')[0]
          .getElementsByClassName('active')[i].className = 'active even';
      }
    }
  }

  line() {
    // 连线
    this.activeArr = document.getElementsByClassName('number-container')[0].getElementsByTagName('table')[0]
      .getElementsByClassName('active');
    let x1 = 0;
    let y1 = 0;
    this.points = '';
    for (let i = 0 ; i < this.activeArr.length; i++) {
      x1 = this.activeArr[i].parentNode.offsetLeft + this.activeArr[i].offsetLeft + this.activeArr[i].clientWidth / 2;
      y1 = this.activeArr[i].parentNode.offsetTop + this.activeArr[i].offsetTop + this.activeArr[i].clientHeight * 3 / 2;
      this.points += x1 + ',' + y1 + ' ';
    }
  }
}
