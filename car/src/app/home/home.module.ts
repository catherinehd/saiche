import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { IndexComponent } from './index/index.component';
import { NumberComponent } from './number/number.component';
import { BigsmallComponent } from './bigsmall/bigsmall.component';
import { SingledoubleComponent } from './singledouble/singledouble.component';
import { OneandtwoComponent } from './oneandtwo/oneandtwo.component';
import { DragonandtigerComponent } from './dragonandtiger/dragonandtiger.component';
import { ShowtimeComponent } from './showtime/showtime.component';

@NgModule({
  imports: [ SharedModule, HomeRoutingModule, FormsModule ],
  declarations: [ IndexComponent, NumberComponent, BigsmallComponent, SingledoubleComponent, OneandtwoComponent,
    DragonandtigerComponent, ShowtimeComponent ],
  providers: [ ]
})
export class HomeModule { }
