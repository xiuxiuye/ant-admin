import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { RouterService } from './router.service'

@Injectable({
    providedIn: 'root',
})
export class RouteGuard implements CanActivate {
    constructor(private router: RouterService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (localStorage.token || sessionStorage.token) {
            return true
        } else {
            this.router.navigateRoute(['/login'])
            return false
        }
    }
}
