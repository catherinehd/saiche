import { Component, OnInit, HostBinding } from '@angular/core';
import { UserStoreService } from '../../service/user-store.service';
import { NavigateService } from '../../service/navigate.service';
import { DelayLeaveAnimation } from '../../shared/animations/delay-leave.animation';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.styl'],
  animations: [ DelayLeaveAnimation ]
})
export class PersonalInfoComponent implements OnInit {
  user: any;
  @HostBinding('@delayLeaveAnimation') delayLeaveAnimation = true;
  @HostBinding('class.page') page = true;
  constructor(private userStoreService: UserStoreService, private navigateService: NavigateService) {
    this.user = this.userStoreService.user;
  }

  ngOnInit() {
  }

  goPage() {
    this.navigateService.push();
    this.navigateService.pushToRoute('/setting-personal-info');
  }
}
