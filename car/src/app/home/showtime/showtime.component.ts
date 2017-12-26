import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.styl']
})
export class ShowtimeComponent implements OnInit {

  @Input() time: string;
  constructor() { }

  ngOnInit() {
    const timeArr = this.time.split('');
    const spanArr = document.getElementsByTagName('span');
    console.log(spanArr);
    for (let i = 0; i < timeArr.length; i++) {
      // if (timeArr[i] === '0') {
      // }
    }
  }

}
