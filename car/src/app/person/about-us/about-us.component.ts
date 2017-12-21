import { Component, OnInit, HostBinding } from '@angular/core';
import { SlideToRightAnimation } from '../../shared/animations/slide-to-right.animation';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.styl'],
  animations: [SlideToRightAnimation]
})
export class AboutUsComponent implements OnInit {
  @HostBinding('@slideToRightAnimation') slideToRightAnimation = true;
  @HostBinding('class.page') page = true;
  constructor() { }

  ngOnInit() {
  }

}
