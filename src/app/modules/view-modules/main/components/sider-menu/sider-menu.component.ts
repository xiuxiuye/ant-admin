import { Component, OnInit, Input } from '@angular/core'
import { AppService } from '../../../../../services/app/app.service'

@Component({
  selector: 'app-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: ['./sider-menu.component.less']
})
export class SiderMenuComponent implements OnInit {
  @Input() menuList: object[]
  handleRouting(commands: any[], queryParams: object): void {
    this.app.startRouting(commands, queryParams)
  }
  constructor(private app: AppService) { }

  ngOnInit() {
  }

}
