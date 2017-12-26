import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.styl']
})
export class NumberComponent implements OnInit {

  time: string;
  constructor() {
    this.time = '04:30';
  }

  ngOnInit() {
  }

}
