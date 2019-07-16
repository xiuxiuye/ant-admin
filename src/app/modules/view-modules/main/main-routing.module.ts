import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MainRoutes } from './main.routing'
import { AppService } from '../../../services/app/app.service'

@NgModule({
  imports: [RouterModule.forChild(MainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
  constructor(private app: AppService) {
    this.app.setMenuList(MainRoutes.reduce((res, next) => {
      if (next.data) {
        res.push(next.data)
      }
      return res
    }, []))
  }
}
