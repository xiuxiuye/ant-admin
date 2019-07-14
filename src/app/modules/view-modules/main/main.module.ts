import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared-module/shared.module';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { SiderMenuComponent } from './components/sider-menu/sider-menu.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { TagsNavComponent } from './components/tags-nav/tags-nav.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    SiderMenuComponent,
    HeaderNavComponent,
    TagsNavComponent
  ]
})
export class MainModule { }
