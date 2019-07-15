import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { I18nLangRoutingModule } from './i18n-lang-routing.module'
import { I18nLangComponent } from './i18n-lang.component'

@NgModule({
  imports: [
    CommonModule,
    I18nLangRoutingModule
  ],
  declarations: [I18nLangComponent]
})
export class I18nLangModule { }
