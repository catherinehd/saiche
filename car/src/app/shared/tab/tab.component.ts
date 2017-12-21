import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.styl']
})
export class TabComponent implements OnInit {
  homeurl: string;
  @Output() godefault = new EventEmitter();

  constructor() {
    this.homeurl = 'home';
  }

  ngOnInit() {
    const defaultStar = localStorage.getItem('star');
    if (defaultStar) {
      // this.homeurl = '/star-detail/' + defaultStar + '/today';
      this.homeurl = '/star-detail/' + defaultStar;
    }
  }

  godefaultstar() {
    this.godefault.emit();
  }


}
