import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sider-menu',
  templateUrl: './sider-menu.component.html',
  styleUrls: ['./sider-menu.component.less']
})
export class SiderMenuComponent implements OnInit {
  @Input() menuList: object[];
  constructor() { }

  ngOnInit() {
  }

}
