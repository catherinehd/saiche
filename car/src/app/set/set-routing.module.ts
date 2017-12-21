import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const setRoutes: Routes = [
  { path: 'set', component: IndexComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(setRoutes) ],
  exports: [ RouterModule ]
})

export class SetRoutingModule { }
