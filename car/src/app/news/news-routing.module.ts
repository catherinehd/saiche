import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/auth-guard.service';

import { IndexComponent } from './index/index.component';

const newsRoutes: Routes = [
  { path: 'news', component: IndexComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forChild(newsRoutes) ],
  exports: [ RouterModule ]
})

export class NewsRoutingModule { }
