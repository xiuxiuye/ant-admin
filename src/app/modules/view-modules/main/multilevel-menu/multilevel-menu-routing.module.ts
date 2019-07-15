import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { Menu2_1Component } from './components/menu2-1/menu2-1.component'
import { Menu3_1Component } from './components/menu3-1/menu3-1.component'

const routes: Routes = [
  {
    path: 'menu2-1',
    component: Menu2_1Component
  },
  {
    path: 'menu2-2/menu3-1',
    component: Menu3_1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultilevelMenuRoutingModule { }
