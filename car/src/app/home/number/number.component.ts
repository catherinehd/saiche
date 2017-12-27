import { Component, OnInit } from '@angular/core';
import { TrendService } from '../../service/trend.service';
import { NumberModel } from '../../model/number.model';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.styl']
})
export class NumberComponent implements OnInit {

  time: number;
  numberList: any;
  constructor(private trendService: TrendService) {
  }

  ngOnInit() {
    this.trendService.getNumberList(1).subscribe( (res) => {
      this.setNumberList(res.json());
    });
  }

  setNumberList(msg) {
    this.numberList = msg.rows;
    this.time = msg.time;
    console.log(this.time);
    for (let i = 0; i < this.numberList.length; i++) {
      // let t = this.numberList[i].wsTime;
      // this.numberList[i].wsTime = this.format(t);
    }
    console.log(this.numberList[0].bjpkExpect);
  }

}
