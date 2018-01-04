import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../service/news.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {

  hasnews: boolean;
  newsList: any[];
  isLoading: boolean;
  isCompleted: boolean;
  page: number;
  userName: string;

  constructor(private newsService: NewsService,
              private userService: UserService) {
    this.hasnews = true;
    this.page = 1;
  }

  ngOnInit() {
    this.userService.islogin().subscribe( res => {
      this.userName = res.json().data.userName;
      this.newsService.getNewsList(this.userName, 1).subscribe( res => {
        if (res.json().rows.length) {
          if (res.json().rows.length < 15) {
            this.isCompleted = true;
          } else {
            this.isCompleted = false;
          }
          this.hasnews = true;
          this.newsList = res.json().rows;
          for (let i = 0; i < this.newsList.length; i++) {
            const t = this.newsList[i].updateTime;
            this.newsList[i].updateTime = this.format(t);   // 开奖时间
          }
        } else {
          this.hasnews = false;
        }
      });
    });
  }

  // 时间戳格式化
  format(t) {
    const unixTimestamp = new Date(t);
    const commonTime = unixTimestamp.getFullYear().toString().substring(2) + '/' + (unixTimestamp.getMonth() + 1) + '/' + unixTimestamp.getDay();
    return commonTime;
  }

  setNewsList(msg) {
    for (let i = 0; i < msg.rows.length; i++) {
      const t = msg.rows[i].updateTime;
      msg.rows[i].updateTime = this.format(t);   // 开奖时间
    }
    if (this.page === 1) {
      this.newsList = msg.rows;
    } else {
      this.newsList = this.newsList.concat(msg.rows);
    }
    this.isLoading = false;
  }

  // 上拉加载
  canLoad() {
    this.isLoading = true;
    this.newsService.getNewsList( this.userName, ++this.page ).subscribe( res => {
      if(res.json().rows.length < 15) {
        this.isCompleted = true;
      } else {
        this.isCompleted = false;
      }
      this.setNewsList(res.json());
    });
  }
}
