import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared-module/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
