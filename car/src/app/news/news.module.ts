import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NewsRoutingModule } from './news-routing.module';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [ SharedModule, NewsRoutingModule, FormsModule ],
  declarations: [ IndexComponent ],
  providers: [ ]
})
export class NewsModule { }
