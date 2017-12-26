import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const homeRoutes: Routes = [
  { path: 'home', redirectTo: 'home/number' },
  { path: 'home/number', component: IndexComponent },
  { path: 'home/bigsmall/:id', component: IndexComponent },
  { path: 'home/singledouble/:id', component: IndexComponent },
  { path: 'home/onetwo/:id', component: IndexComponent },
  { path: 'home/dragontiger/:id', component: IndexComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ]
})

export class HomeRoutingModule { }
