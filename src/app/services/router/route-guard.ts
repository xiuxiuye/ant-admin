import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { RouterService } from './router.service'
import { AppService } from '../app/app.service'

@Injectable({
    providedIn: 'root',
})
export class RouteGuard implements CanActivate {
    constructor(private router: RouterService, private app: AppService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (localStorage.token || sessionStorage.token) {
            // 将页面添加进app.pageOpenedList
            let page = Object.assign({}, next.firstChild.routeConfig.data)
            page.path = state.url,
            page.selected = true
            this.app.addPageOpenedList(page)
            return true
        } else {
            this.router.navigateRoute(['/login'])
            return false
        }
    }
}
