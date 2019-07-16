import { Component, OnInit } from '@angular/core'
import { UserService } from '../../../services/user/user.service'
import { AppService } from '../../../services/app/app.service'
import { RouterService } from '../../../services/router/router.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  menuList: Array<object>
  initMenus() {
    this.menuList = this.app.getMenuList()
  }
  constructor(private user: UserService, private app: AppService) { }
  ngOnInit() {
    this.initMenus()
  }

}
