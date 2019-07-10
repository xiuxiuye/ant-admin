import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { en_US, NzI18nService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  selectedLang = new FormControl('zh_CN');
  selected() {
    this.i18n.setLocale(en_US);
  }
  constructor(private i18n: NzI18nService) {}

  ngOnInit() {
    console.log(en_US);
  }

}
