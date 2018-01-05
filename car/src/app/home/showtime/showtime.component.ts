import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { TrendService } from '../../service/trend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.styl']
})
export class ShowtimeComponent implements OnInit, OnDestroy {

  time: number;
  timer: any;
  agent: number;
  timenum: number;
  minutes: number;  // 分钟
  seconds: number; // 秒数
  seconds1: number; // 秒数个位数
  seconds2: number; // 秒数十位数
  @Output() onRefresh = new EventEmitter();

  constructor(private trendService: TrendService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.queryParams.agent) {
      this.agent = this.activatedRoute.snapshot.queryParams.agent;
    } else {
      this.agent = null;
    }
    this.trendService.getNumberList(1, this.agent).subscribe( (res) => {
      this.time = res.json().time ;
      // 获取开奖剩余时间秒数
      this.timeformat(this.time);
      // 进行倒计时
      this.timecounter(this.time);
    });
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  refresh() {
    this.onRefresh.emit(status);
  }

  // 倒计时
  timecounter(time) {
    this.timer = setInterval(() => {
      --time;
      if (time < 0) {
        this.refresh();
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
