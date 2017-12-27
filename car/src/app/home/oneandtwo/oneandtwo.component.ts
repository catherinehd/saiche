import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private activatedRouter: ActivatedRoute) {
    this.seturl = 'onetwo';
  }

  ngOnInit() {
    this.color = '#379ade';
    this.tableheight = document.getElementsByClassName('number-container')[0].getElementsByTagName('table')[0].clientHeight;
    // 画线
    this.activeArr = document.getElementsByClassName('number-container')[0].getElementsByTagName('table')[0]
      .getElementsByClassName('active');
    let x1 = 0;
    let y1 = 0;
    this.points = '';
    for (let i = 0 ; i < this.activeArr.length; i++) {
      console.log(this.activeArr[i].offsetTop);
      x1 = this.activeArr[i].parentNode.offsetLeft + this.activeArr[i].offsetLeft + this.activeArr[i].clientWidth / 2;
      y1 = this.activeArr[i].parentNode.offsetTop + this.activeArr[i].offsetTop - this.activeArr[i].clientHeight;
      this.points += x1 + ',' + y1 + ' ';
    }
  }

}
