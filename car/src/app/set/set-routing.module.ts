import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SettelComponent } from './settel/settel.component';
import { AuthGuard } from '../service/auth-guard.service';

const setRoutes: Routes = [
  { path: 'set', redirectTo: 'set/bigsmall', canActivate: [AuthGuard]},
  { path: 'set-tel', component: SettelComponent, canActivate: [AuthGuard] },
  { path: 'set-num/:url', component: SettelComponent, canActivate: [AuthGuard] },
  { path: 'set/bigsmall', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'set/singledouble', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'set/onetwo', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'set/dragontiger', component: IndexComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forChild(setRoutes) ],
  exports: [ RouterModule ]
})

export class SetRoutingModule { }
