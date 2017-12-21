import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SetRoutingModule } from './set-routing.module';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [ SharedModule, SetRoutingModule, FormsModule ],
  declarations: [ IndexComponent ],
  providers: [ ]
})
export class SetModule { }
