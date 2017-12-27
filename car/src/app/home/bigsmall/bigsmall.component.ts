import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bigsmall',
  templateUrl: './bigsmall.component.html',
  styleUrls: ['./bigsmall.component.styl']
})
export class BigsmallComponent implements OnInit {

  title: string;
  color: string;
  seturl: string;
  tableheight: number;
  points: any;
  activeArr: any;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.tableheight = document.getElementsByClassName('number-container')[0].getElementsByTagName('table')[1].clientHeight;
    if (this.router.url.includes('bigsmall')) {
      this.seturl = 'bigsmall';
      this.title = '大小走势';
    } else if (this.router.url.includes('singledouble')) {
      this.title = '单双走势';
      this.seturl = 'singledouble';
    } else if (this.router.url.includes('dragontiger')) {
      this.title = '1-5龙虎';
      this.seturl = 'dragontiger';
    }
    const colorList = ['#c11e12', '#2c43a8', '#2c72a8', '#2ca89e', '#75a82c', '#a89b2c', '#a8632c', '#a8402c', '#a82c6c', '#982ca8'];
    this.activatedRoute.params.subscribe((params: any) => {
      this.color = colorList[params.id - 1];
    });
    this.activeArr = document.getElementsByClassName('number-container')[0].getElementsByTagName('table')[1]
      .getElementsByClassName('active');
    let x1 = 0;
    let y1 = 0;
    this.points = '';
    for (let i = 0 ; i < this.activeArr.length; i++) {
      x1 = this.activeArr[i].parentNode.offsetLeft + this.activeArr[i].offsetLeft + this.activeArr[i].clientWidth / 2;
      y1 = this.activeArr[i].parentNode.offsetTop + this.activeArr[i].offsetTop + this.activeArr[i].clientHeight;
      this.points += x1 + ',' + y1 + ' ';
    }
  }

}
