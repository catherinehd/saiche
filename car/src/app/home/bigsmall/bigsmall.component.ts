import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bigsmall',
  templateUrl: './bigsmall.component.html',
  styleUrls: ['./bigsmall.component.styl']
})
export class BigsmallComponent implements OnInit {

  title: string;
  color: string;
  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.includes('bigsmall')) {
      this.title = '大小走势';
    } else if (this.router.url.includes('singledouble')) {
      this.title = '单双走势';
    } else if (this.router.url.includes('dragontiger')) {
      this.title = '1-5龙虎';
    }
    const colorList = ['#1079e1', '#a9572f', '#4a8646', '#825bbd', '#983a49', '#425ca8', '#d58356', '#416735', '#65476b', '#8a2d26'];
    this.color = colorList[1];
  }

}
