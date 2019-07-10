import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared-module/shared.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [SharedModule],
  declarations: [LoginComponent, LoginFormComponent]
})
export class LoginModule { }
