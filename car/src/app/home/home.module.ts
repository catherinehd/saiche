import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [ SharedModule, HomeRoutingModule, FormsModule ],
  declarations: [ IndexComponent ],
  providers: [ ]
})
export class HomeModule { }
