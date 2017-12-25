import { Component, OnInit, HostBinding } from '@angular/core';
import { SlideUpAnimation } from '../../shared/animations/slide-up.animation';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.styl'],
  animations: [SlideUpAnimation]
})
export class InviteComponent implements OnInit {

  @HostBinding('@slideUpAnimation') slideUpAnimation;
  @HostBinding('class.invitPage') invitPage = true;
  constructor() { }

  ngOnInit() {
  }

}
