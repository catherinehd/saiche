import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SettelComponent } from './settel/settel.component';

const setRoutes: Routes = [
  { path: 'set', redirectTo: 'set/bigsmall'},
  { path: 'set-tel', component: SettelComponent },
  { path: 'set-num', component: SettelComponent },
  { path: 'set/bigsmall', component: IndexComponent },
  { path: 'set/singledouble', component: IndexComponent },
  { path: 'set/onetwo', component: IndexComponent },
  { path: 'set/dragontiger', component: IndexComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(setRoutes) ],
  exports: [ RouterModule ]
})

export class SetRoutingModule { }
