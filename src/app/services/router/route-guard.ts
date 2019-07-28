import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router'
import { RouterService } from './router.service'
import { AppService } from '../app/app.service'

@Injectable({
    providedIn: 'root',
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private router: RouterService, private app: AppService) { }

  // 当前路由守卫，如果只是子路由切换，不会触发
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.token || sessionStorage.token) {
      // 将页面添加进app.pageOpenedList
      // let page = Object.assign({}, next.firstChild.routeConfig.data)
      // page.path = state.url,
      // page.selected = true
      // console.log('parent')
      // this.app.addPageOpenedList(page)
      // console.log(next)
      // console.log(state)
      // console.log('==============parent=============')
      return true
    } else {
      // this.router.navigateRoute(['/login'])
      return false
    }
  }

  // 子路由守卫
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!route.firstChild) {
        let page = Object.assign({}, route.routeConfig.data)
        page.path = state.url,
        page.selected = true
        this.app.openNewPage(page)
      }
    return this.canActivate(route, state);
  }
}
