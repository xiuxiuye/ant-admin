import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { I18nLangComponent } from './i18n-lang.component';

const routes: Routes = [
  {
    path: '',
    component: I18nLangComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class I18nLangRoutingModule { }
