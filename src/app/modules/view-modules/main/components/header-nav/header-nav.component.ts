import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user/user.service'
import { AppService } from '../../../../../services/app/app.service'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent implements OnInit {
  userInfo: Object

  init(): void {
    this.userInfo = this.user.getBasicInfo()
  }
  logout(): void {
    this.user.logout()
  }
  toggleFullScreen(): void {

  }
  constructor(private user: UserService, private app: AppService) { }

  ngOnInit() {
    this.init()
  }
}
