import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SetRoutingModule } from './set-routing.module';

import { IndexComponent } from './index/index.component';
import { SettelComponent } from './settel/settel.component';
import { SettypeComponent } from './settype/settype.component';

@NgModule({
  imports: [ SharedModule, SetRoutingModule, FormsModule ],
  declarations: [ IndexComponent, SettelComponent, SettypeComponent ],
  providers: [ ]
})
export class SetModule { }
