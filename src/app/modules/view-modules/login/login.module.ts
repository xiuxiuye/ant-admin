import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared-module/shared.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { I18nModule } from '../../i18n/i18n.module';

@NgModule({
  imports: [SharedModule, I18nModule],
  declarations: [LoginComponent, LoginFormComponent]
})
export class LoginModule { }
