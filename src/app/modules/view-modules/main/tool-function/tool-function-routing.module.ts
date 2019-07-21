import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ToolFunctionComponent } from './tool-function.component'

const routes: Routes = [
  {
    path: '',
    component: ToolFunctionComponent,
    data: {
      title: '工具函数',
      type: 'menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolFunctionRoutingModule { }
