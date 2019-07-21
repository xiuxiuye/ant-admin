import { NgModule } from '@angular/core'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'
import { SharedModule } from 'src/app/modules/shared-module/shared.module'
import { Home1Component } from './home1/home1.component'

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, Home1Component]
})
export class HomeModule {}
