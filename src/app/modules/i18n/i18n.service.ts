import { Injectable } from '@angular/core';
import { NzI18nService, en_US, ja_JP, zh_CN, zh_TW } from 'ng-zorro-antd';
import { I18nModule } from './i18n.module';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: I18nModule
})
export class I18nService {
  private ngZorroLangs: object;
  private localLang: string;
  private init() {
    this.initNgZorroLangs();
    this.initLocalLang();
    this.setLocalLang(this.localLang);
  }
  private initNgZorroLangs() {
    this.ngZorroLangs = {
      'en-US': en_US,
      'ja-JP': ja_JP,
      'zh-CN': zh_CN,
      'zh-TW': zh_TW
    };
  }
  private initLocalLang() {
    // 添加语言支持
    const langs = ['zh-CN', 'en-US', 'ja-JP', 'zh-TW'];
    this.i18n.addLangs(langs);
    const browserLang = this.i18n.getBrowserLang();
    for (const lang of langs) {
      if (lang.includes(browserLang)) {
        this.localLang = lang;
        break;
      }
    }
    this.localLang = this.localLang || 'zh-CN';
  }
  public getLocalLang() {
    return this.localLang;
  }
  public setLocalLang(lang: string): void {
    this.localLang = lang;
    // 设置NG-ZORRO的i18n
    this.nzI18n.setLocale(this.ngZorroLangs[this.localLang]);
    // 设置自定义的i18n
    this.i18n.use(this.localLang);
  }
  constructor(private nzI18n: NzI18nService, private i18n: TranslateService) {
    this.init();
  }
}
