import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { I18nService } from '../../i18n/i18n.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private i18n: I18nService) { }

  ngOnInit() {
    this.selectedLang = new FormControl(this.i18n.getLocalLang())
  }

  selectedLang: FormControl
  spinStatus: boolean = false

  selected() {
    this.i18n.setLocalLang(this.selectedLang.value);
  }
  toggleSpin(status: boolean) {
    this.spinStatus = status
  }
}
