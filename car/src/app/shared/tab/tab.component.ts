import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.styl']
})
export class TabComponent implements OnInit {
  homeurl: string;
  @Output() godefault = new EventEmitter();
  // @Input() hasnews: boolean;
  hasnews: boolean;

  constructor() {
    this.homeurl = 'home';
  }

  ngOnInit() {
    this.hasnews = true;
  }

  godefaultstar() {
    this.godefault.emit();
  }


}
