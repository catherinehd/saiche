import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DeviceService } from './service/device.service';
import {AppComponent} from './app.component';

const appRouters: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
