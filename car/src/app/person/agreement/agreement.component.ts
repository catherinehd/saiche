import {Component, OnInit, HostBinding, Output, EventEmitter} from '@angular/core';
import { SlideUpAnimation } from '../../shared/animations/slide-up.animation';
import { ServiceInfo } from '../../config/config';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['../../shared/nav/nav.component.styl', './agreement.component.styl'],
  // animations: [ SlideUpAnimation ]
})
export class AgreementComponent implements OnInit {
  appName: string;
  @Output() onClose = new EventEmitter();
  @HostBinding('@slideUpAnimation') slideUpAnimation = true;
  @HostBinding('style.zIndex') zIndex = 2;
  @HostBinding('class.page') page = true;

  constructor() {
    this.appName = ServiceInfo.appName;
  }

  ngOnInit() {}

  goBack() {
    this.onClose.emit();
  }
}
