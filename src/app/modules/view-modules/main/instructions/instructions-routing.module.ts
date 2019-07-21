import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { InstructionsComponent } from './instructions.component';

const routes: Routes = [
  {
    path: '',
    component: InstructionsComponent,
    data: {
      title: '指令',
      type: 'menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructionsRoutingModule { }
