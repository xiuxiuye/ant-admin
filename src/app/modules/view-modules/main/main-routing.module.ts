import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainRoutes } from './main.routing';

console.log(MainRoutes)

@NgModule({
  imports: [RouterModule.forChild(MainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
