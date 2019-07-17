import { Component, OnInit, Input } from '@angular/core'
import { AppService } from '../../../../../services/app/app.service'
import { RouterService } from '../../../../../services/router/router.service'

@Component({
  selector: 'app-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: ['./sider-menu.component.less']
})
export class SiderMenuComponent implements OnInit {
  @Input() menuList: object[]
  handleRouting(commands: any[], queryParams: object): void {
    this.router.navigateRoute(commands, queryParams)
  }
  constructor(private app: AppService, private router: RouterService) { }

  ngOnInit() {
  }

}
