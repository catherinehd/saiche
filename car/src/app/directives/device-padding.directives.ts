import { Directive, Renderer2, ElementRef, Input, AfterViewInit } from '@angular/core';
import { DeviceService } from '../service/device.service';

@Directive({
  selector: '[appDevicePadding]'
})

export class DevicePaddingDirective implements AfterViewInit {
  @Input('appDevicePadding') padding: number;
  constructor(private deviceService: DeviceService,
              private renderer: Renderer2,
              private el: ElementRef) {}

  ngAfterViewInit() {
    const devicePadding = this.deviceService.isIos ? 20 : 0;
    const paddingTop = this.padding ? this.padding + devicePadding : devicePadding;
    this.renderer.setStyle(this.el.nativeElement, 'padding-top', `${paddingTop}px`);
  }
}
