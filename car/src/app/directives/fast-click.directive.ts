import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFastClick]'
})
export class FastClickDirective {
  @Output() onFastClick = new EventEmitter();
  @Input('appFastClick') targetOrtime: number;
  isMove: boolean;
  constructor() { }

  @HostListener('touchmove', ['$event']) onTouchmove(e) {
    this.isMove = true;
  }
  @HostListener('touchend', ['$event']) onTouchend(e) {
    if (!this.isMove) {
      !this.targetOrtime ? this.onFastClick.emit(e) : this.onFastClick.emit(e);
    }
    this.isMove = false;
  }

}
