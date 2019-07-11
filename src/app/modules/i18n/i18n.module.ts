import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}
export function LocaleIdFactory() {
  return navigator.language;
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({// 配置i18n
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  providers: [],
  exports: [
    TranslateModule
  ]
})
export class I18nModule {
  constructor() { }
}
