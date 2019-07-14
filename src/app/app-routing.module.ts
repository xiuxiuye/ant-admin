import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    // login module is lazy-load
    path: 'login',
    loadChildren: () => import('./modules/view-modules/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/view-modules/main/main.module').then(mod => mod.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
