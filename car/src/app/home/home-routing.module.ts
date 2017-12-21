import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const homeRoutes: Routes = [
  { path: 'home', component: IndexComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(homeRoutes) ],
  exports: [ RouterModule ]
})

export class HomeRoutingModule { }
