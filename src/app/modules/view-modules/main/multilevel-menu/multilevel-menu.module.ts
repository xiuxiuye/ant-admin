import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MultilevelMenuRoutingModule } from './multilevel-menu-routing.module'
import { Menu2_1Component } from './components/menu2-1/menu2-1.component'
import { Menu3_1Component } from './components/menu3-1/menu3-1.component'

@NgModule({
  imports: [
    CommonModule,
    MultilevelMenuRoutingModule
  ],
  declarations: [
    Menu2_1Component,
    Menu3_1Component
  ]
})
export class MultilevelMenuModule { }
