import { Injectable } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  // 路由导航
  navigateRoute(commands: any[] = ['/**'], queryParams: object = {}): void {
    this.router.navigate(commands, queryParams)
  }
  // 返回当前路由信息
  getRoute():  ActivatedRoute{
    return this.route
  }
  constructor(private router: Router, private route: ActivatedRoute,) { }

}
