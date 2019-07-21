import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ErrorCollectionComponent } from './error-collection.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorCollectionComponent,
    data: {
      title: '错误收集',
      type: 'menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorCollectionRoutingModule { }
