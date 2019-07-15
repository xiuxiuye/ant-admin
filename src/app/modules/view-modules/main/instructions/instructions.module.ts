import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { InstructionsRoutingModule } from './instructions-routing.module'
import { InstructionsComponent } from './instructions.component'

@NgModule({
  imports: [
    CommonModule,
    InstructionsRoutingModule
  ],
  declarations: [InstructionsComponent]
})
export class InstructionsModule { }
