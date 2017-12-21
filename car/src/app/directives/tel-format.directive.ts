import { Directive, Input, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appTelFormat]'
})
export class TelFormatDirective {

  @Input('appTelFormat') control: FormControl;

  constructor() { }

  @HostListener('keydown', ['$event']) onKeyDown(e: any) {
    const data = this.control.value;
    if (e.keyCode !== 8) {
      if (data.length === 3) {
        this.control.setValue(data + ' ');
      } else if (data.length === 8) {
        this.control.setValue(data + ' ');
      }
    } else {
      if (data.length === 4 && data.substr(-1) === ' ') {
        this.control.setValue(data.substring(0, data.length - 1));
      } else if (data.length === 9 && data.substr(-1) === ' ') {
        this.control.setValue(data.substring(0, data.length - 1));
      }
    }
  }

}
