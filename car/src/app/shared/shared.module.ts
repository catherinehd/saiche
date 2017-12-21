import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalComponent } from './modal/modal.component';
import { NavComponent } from './nav/nav.component';
import { TabComponent } from './tab/tab.component';
import { FlyMsgComponent } from './fly-msg/fly-msg.component';
import { LoadingComponent } from './loading/loading.component';

import { TouchLoadingDirective } from '../directives/touch-loading.directive';
import { DevicePaddingDirective } from '../directives/device-padding.directives';
import { TelFormatDirective } from '../directives/tel-format.directive';

import { ListLoadingComponent } from './list-loading/list-loading.component';
import { FastClickDirective } from '../directives/fast-click.directive';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [
    ModalComponent, NavComponent, TabComponent, FlyMsgComponent, LoadingComponent, ListLoadingComponent,
    TouchLoadingDirective, DevicePaddingDirective, TelFormatDirective, FastClickDirective,
  ],
  exports: [
    CommonModule, ReactiveFormsModule, RouterModule,
    ModalComponent, NavComponent, TabComponent, FlyMsgComponent, LoadingComponent, ListLoadingComponent,
    TouchLoadingDirective, DevicePaddingDirective, TelFormatDirective, FastClickDirective,
  ]
})

export class SharedModule { }
