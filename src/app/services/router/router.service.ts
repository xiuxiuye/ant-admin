import { Injectable } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  // 路由导航
  navigateRoute(commands: any[] = ['/**'], params: object = {}): void {
    this.router.navigate(commands.concat(params))
  }
  // 返回当前路由信息
  getRoute(): Router {
    return this.router
  }
  constructor(private router: Router, private route: ActivatedRoute,) { }

}
