import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';

@NgModule({
  imports: [
    LoginModule,
    MainModule
  ]
})
export class ViewModule { }
