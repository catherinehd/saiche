import {Component, OnInit, HostBinding, Output, EventEmitter} from '@angular/core';
import { SlideUpAnimation } from '../../shared/animations/slide-up.animation';
import { ServiceInfo } from '../../config/config';
import { NavigateService } from '../../service/navigate.service';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['../../shared/nav/nav.component.styl', './agreement.component.styl'],
  animations: [ SlideUpAnimation ]
})
export class AgreementComponent implements OnInit {
  appName: string;
  @HostBinding('@slideUpAnimation') slideUpAnimation = true;
  @HostBinding('style.zIndex') zIndex = 2;
  @HostBinding('class.page') page = true;

  constructor(private navigateService: NavigateService) {
    this.appName = ServiceInfo.appName;
  }

  ngOnInit() {}

  goBack() {
    this.navigateService.popRoute();
  }
}
