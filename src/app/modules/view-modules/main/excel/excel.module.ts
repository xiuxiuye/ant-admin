import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ExcelRoutingModule } from './excel-routing.module'
import { UploadExcelComponent } from './components/upload-excel/upload-excel.component'
import { ExportExcelComponent } from './components/export-excel/export-excel.component'

@NgModule({
  imports: [
    CommonModule,
    ExcelRoutingModule
  ],
  declarations: [
    UploadExcelComponent,
    ExportExcelComponent
  ]
})
export class ExcelModule { }
