import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.styl']
})
export class ShowtimeComponent implements OnInit, OnDestroy {

  @Input() time: number;
  timer: any;
  timenum: number;
  minutes: number;  // 分钟
  seconds: number; // 秒数
  seconds1: number; // 秒数个位数
  seconds2: number; // 秒数十位数
  constructor() { }

  ngOnInit() {
    console.log(this.time);
    this.time = 234;
    // 获取开奖剩余时间秒数
    this.timeformat(this.time);
    // 进行倒计时
    this.timecounter(this.time);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  // 倒计时
  timecounter(time) {
    this.timer = setInterval(() => {
      --time;
      if (time < 0) {
        time = 300;
      }
      this.timeformat(time);
    }, 1000);
  }

  timeformat(time) {
    this.timenum = time;
    this.minutes = Math.floor(this.timenum / 60);
    this.seconds = this.timenum - this.minutes * 60;
    // 设置开奖剩余时间
    if (this.seconds.toString().split('').length ===  1) {
      this.seconds1 = this.seconds;
      this.seconds2 = 0;
    } else {
      this.seconds1 = Number(this.seconds.toString().split('')[1]);
      this.seconds2 = Number(this.seconds.toString().split('')[0]);
    }
  }

}
