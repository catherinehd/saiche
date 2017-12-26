import { Component, OnInit, OnChanges } from '@angular/core';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit, OnChanges {

  hasmsgnum: number; // 剩余短信条数

  constructor(private navigateService: NavigateService) {
  }

  ngOnInit() {
    this.hasmsgnum = 50;
  }

  ngOnChanges() {
  }

  goPage(url) {
    this.navigateService.push();
    this.navigateService.pushToRoute(url);
  }
}
