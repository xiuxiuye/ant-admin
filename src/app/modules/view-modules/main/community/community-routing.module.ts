import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityComponent } from './community.component';


const routes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    data: {
      title: '社区',
      type: 'menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
