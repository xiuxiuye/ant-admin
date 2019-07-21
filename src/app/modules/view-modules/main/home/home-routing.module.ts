import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { Home1Component } from './home1/home1.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: '首页',
      type: 'menu'
    }
  },
  {
    path: 'home1',
    component: Home1Component,
    data: {
      title: '首页1'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
