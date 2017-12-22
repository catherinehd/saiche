import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  number: boolean;
  bigsmall: boolean;
  dragonandtiger: boolean;
  oneandtwo: boolean;
  singledouble: boolean;
  constructor(private navigateService: NavigateService) {
    this.number = false;
    this.bigsmall = true;
    this.dragonandtiger = false;
    this.oneandtwo = false;
    this.singledouble = false;
  }

  ngOnInit() {
  }

  goPage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }

}
