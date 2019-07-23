import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router'
import { RouterService } from './router.service'
import { AppService } from '../app/app.service'

@Injectable({
    providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  constructor(private router: RouterService, private app: AppService) { }

  // 当前路由守卫，如果只是子路由切换，不会触发
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.token || sessionStorage.token) {
      // 将页面添加进app.pageOpenedList
      let page = Object.assign({}, next.firstChild.routeConfig.data)
      page.path = state.url,
      page.selected = true
      console.log(page)
      this.app.addPageOpenedList(page)
      return true
    } else {
      this.router.navigateRoute(['/login'])
      return false
    }
  }

  // 子路由守卫
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('child')
    return this.canActivate(route, state);
  }
}
