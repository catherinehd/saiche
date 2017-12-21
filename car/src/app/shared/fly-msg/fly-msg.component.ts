import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FlyMsgAnimation } from '../animations/fly-msg.animation';

@Component({
  selector: 'app-fly-msg',
  templateUrl: './fly-msg.component.html',
  styleUrls: ['./fly-msg.component.styl'],
  animations: [FlyMsgAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyMsgComponent {
  @Input() msg: string;
}
