import { Component, OnInit } from '@angular/core';
import { FadeInOutAnimation } from '../animations/fade-in-out.animation';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.styl'],
  animations: [ FadeInOutAnimation ]
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
