import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const newsRoutes: Routes = [
  { path: 'news', component: IndexComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(newsRoutes) ],
  exports: [ RouterModule ]
})

export class NewsRoutingModule { }
