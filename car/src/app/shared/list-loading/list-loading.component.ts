import { Component, OnInit } from '@angular/core';
import { SlideDownUpAnimation } from '../animations/slide-down-up.animation';

@Component({
  selector: 'app-list-loading',
  templateUrl: './list-loading.component.html',
  styleUrls: ['./list-loading.component.styl'],
  animations: [SlideDownUpAnimation]
})
export class ListLoadingComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
