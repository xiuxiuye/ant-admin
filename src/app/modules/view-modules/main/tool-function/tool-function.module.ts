import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolFunctionRoutingModule } from './tool-function-routing.module'
import { ToolFunctionComponent } from './tool-function.component'

@NgModule({
  imports: [
    CommonModule,
    ToolFunctionRoutingModule
  ],
  declarations: [ToolFunctionComponent]
})
export class ToolFunctionModule { }
