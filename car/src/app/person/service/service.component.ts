import { Component, OnInit, HostBinding } from '@angular/core';
import { ServiceInfo } from '../../config/config';
import { SlideToRightAnimation } from '../../shared/animations/slide-to-right.animation';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.styl'],
  animations: [ SlideToRightAnimation ]
})
export class ServiceComponent implements OnInit {
  serviceInfo = ServiceInfo;
  @HostBinding('@slideToRightAnimation') slideToRightAnimation = true;
  @HostBinding('class.page') page = true;
  constructor() { }

  ngOnInit() {
  }

}
