import { Injectable } from '@angular/core'
import { RouterService } from '../router/router.service'
import { AppService } from '../app/app.service'

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
    this.app.resetPageOpenedList()
    this.router.navigateRoute(['/login'])
  }
  constructor(private router: RouterService, private app: AppService) { }
}
