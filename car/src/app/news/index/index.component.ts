import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  hasnews: boolean;

  constructor() {
    this.hasnews = true;
  }

  ngOnInit() {
  }

}
