import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Inject, LOCALE_ID } from '@angular/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}
export function LocaleIdFactory() {
  return navigator.language;
}

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forRoot({//配置i18n
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useFactory: LocaleIdFactory
    }
  ],
  exports: [
    TranslateModule
  ]
})
export class I18nModule {
  constructor(private i18n: TranslateService, @Inject(LOCALE_ID) locale: string) {
    locale = "zh-CN";
    this.i18n.use(locale);
  }
}
