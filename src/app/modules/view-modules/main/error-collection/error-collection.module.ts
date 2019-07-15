import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorCollectionRoutingModule } from './error-collection-routing.module'
import { ErrorCollectionComponent } from './error-collection.component'

@NgModule({
  imports: [
    CommonModule,
    ErrorCollectionRoutingModule
  ],
  declarations: [ErrorCollectionComponent]
})
export class ErrorCollectionModule { }
