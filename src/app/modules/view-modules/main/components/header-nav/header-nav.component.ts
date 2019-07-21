import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user/user.service'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.less']
})
export class HeaderNavComponent implements OnInit {

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  logout() {
    this.user.logout()
  }
}
