import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../service/auth-guard.service';

import { LoginComponent } from './login/login.component';
import { SettingPwdComponent } from './setting-pwd/setting-pwd.component';
import { IndexComponent } from './index/index.component';
import { AgreementComponent } from './agreement/agreement.component';
import { TelValidComponent } from './tel-valid/tel-valid.component';
import { SettingComponent } from './setting/setting.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { ServiceComponent } from './service/service.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SettingPersonalInfoComponent } from './setting-personal-info/setting-personal-info.component';


const personRoutes: Routes = [
  { path: 'person', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register/setting-pwd', component: SettingPwdComponent },
  { path: 'reset/setting-pwd', component: SettingPwdComponent },
  { path: 'agreement', component: AgreementComponent},
  { path: 'register/tel-valid', component: TelValidComponent },
  { path: 'reset/tel-valid', component: TelValidComponent },
  { path: 'setting', component: SettingComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'personal-info', component: PersonalInfoComponent, canActivate: [AuthGuard] },
  { path: 'setting-personal-info', component: SettingPersonalInfoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(personRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class PersonRoutingModule {}
