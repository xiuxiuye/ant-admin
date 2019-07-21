import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { I18nLangComponent } from './i18n-lang.component';

const routes: Routes = [
  {
    path: '',
    component: I18nLangComponent,
    data: {
      title: 'i18n多语言',
      type: 'menu'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class I18nLangRoutingModule { }
