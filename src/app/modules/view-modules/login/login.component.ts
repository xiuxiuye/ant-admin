import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { I18nService } from '../../../root-services/i18n.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  selectedLang: FormControl;
  selected() {
    this.i18n.setLang(this.selectedLang.value);
  }
  constructor(private i18n: I18nService) {}

  ngOnInit() {
    this.selectedLang = new FormControl('zh_CN');
  }

}
