import { Injectable } from '@angular/core';
import { NzI18nService, en_US, ja_JP, zh_CN, zh_TW } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private ngZorroLangs: object;
  private localeLang: string;
  initLangs() {
    this.ngZorroLangs = {
      en_US,
      ja_JP,
      zh_CN,
      zh_TW
    };
    this.localeLang = 'zh_CN';
    this.setLang(this.localeLang);
    console.log('lang init complete!');
  }
  public setLang(lang: string): void {
    this.localeLang = lang;
    this.nzI18n.setLocale(this.ngZorroLangs[this.localeLang]);
  }
  constructor(private nzI18n: NzI18nService) {
    this.initLangs();
  }
}
