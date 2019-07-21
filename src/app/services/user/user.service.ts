import { Injectable } from '@angular/core'
import { RouterService } from '../router/router.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private basicInfo: object
  setBasicInfo(info: object): void {
    this.basicInfo = info
  }
  getBasicInfo(): object {
    return this.basicInfo
  }
  logout() {
    this.basicInfo = {}
    localStorage.clear()
    sessionStorage.clear()
    this.router.navigateRoute(['/login'])
  }
  constructor(private router: RouterService) { }
}
